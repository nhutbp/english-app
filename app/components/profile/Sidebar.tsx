import { useSidebar } from "~/components/profile/LayoutProvider";
import { Link } from "@remix-run/react";

const Sidebar = () => {
	const { isSidebarOpen, toggleSidebar } = useSidebar();

	return (
		<aside className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none ${isSidebarOpen ? "translate-x-0 w-64 lg:flex" : "w-0 md:w-20 lg:flex"}`}>
			{/* Sidebar header */}
			<div className={`flex items-center justify-between flex-shrink-0 p-2 ${!isSidebarOpen ? "lg:justify-center" : ""}`}>
				<span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
					K<span className={!isSidebarOpen ? "lg:hidden" : ""}>-WD</span>
				</span>
				<button onClick={toggleSidebar} className="p-2 rounded-md lg:hidden">
					<svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			{/* Sidebar links */}
			<nav className="flex-1 overflow-hidden hover:overflow-y-auto">
				<ul className="p-2 overflow-hidden">
					<li>
						<Link to="/dashboard" className={`flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 ${!isSidebarOpen ? "justify-center" : ""}`}>
							<span>
								{/* <Image src="/icons/home.svg" alt="" width={25} height={25} /> */}
							</span>
							<span className={!isSidebarOpen ? "lg:hidden" : ""}>Dashboard</span>
						</Link>
					</li>
					<li>
						<Link to="/dashboard/deposit" className={`flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 ${!isSidebarOpen ? "justify-center" : ""}`}>
							<span>
								{/* <Image src="/icons/landmark.svg" alt="" width={25} height={25} /> */}
							</span>
							<span className={!isSidebarOpen ? "lg:hidden" : ""}>Tiết kiệm</span>
						</Link>
					</li>
					{/* Additional Sidebar Links */}
				</ul>
			</nav>

			{/* Sidebar footer */}
			<div className="flex-shrink-0 p-2 border-t max-h-14">
				<button className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring">
					<span>
						<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
						</svg>
					</span>
					<span className={!isSidebarOpen ? "lg:hidden" : ""}> Logout </span>
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
