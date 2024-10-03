"use client";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface LayoutContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Kiểm tra localStorage chỉ khi client-side
    const savedDarkMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []); // Chạy một lần khi component mount

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark", !isDarkMode);
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode.toString()); // Lưu trạng thái dark mode vào localStorage
      return newMode;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize(); // Kiểm tra kích thước khi component mount

    window.addEventListener("resize", handleResize); // Lắng nghe sự kiện resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup sự kiện khi component unmount
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar, isDarkMode, toggleDarkMode }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const UseLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useSidebar must be used within a LayoutProvider");
  }
  return context;
};
