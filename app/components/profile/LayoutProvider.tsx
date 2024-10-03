"use client";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface LayoutContextProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
          } else {
            setIsSidebarOpen(true);
          }
        };
    
        // Gọi hàm handleResize khi component mount lần đầu
        handleResize();
    
        // Thêm sự kiện lắng nghe khi thay đổi kích thước cửa sổ
        window.addEventListener("resize", handleResize);
    
        // Cleanup sự kiện khi component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
