import { UseLayoutContext } from "~/components/layouts/LayoutProvider";
import { NavLink } from "@remix-run/react";

const menu = [
	{
		title: "Home",
		href: "/",
		icon: (
			<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
				/>
			</svg>
		),
	},
	{
		title: "Chat",
		href: "/chat",
		icon: (
			<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
				/>
			</svg>
		),
	},
];

const Sidebar = () => {
	const { isSidebarOpen, toggleSidebar } = UseLayoutContext();

	return (
		<aside
			className={`fixed side-bar inset-y-0 z-10 flex flex-col flex-shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-h-screen overflow-hidden transition-all transform bg-white dark:bg-gray-900 lg:z-auto lg:static ${
				isSidebarOpen ? "translate-x-0 w-52 lg:flex" : "w-0 md:w-20 lg:flex"
			}`}>
			{/* Sidebar header */}
			<div className={`flex items-center justify-between flex-shrink-0 p-2 ${!isSidebarOpen ? "lg:justify-center" : ""}`}>
				<span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
					L<span className={!isSidebarOpen ? "lg:hidden" : ""}>-English</span>
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
					{menu.map((item, index) => (
						<li key={index}>
							<NavLink
								to={item.href}
								className={({ isActive }) =>
									`flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 ${!isSidebarOpen ? "justify-center" : ""} ${isActive ? "opacity-100" : "opacity-30"}`
								}>
								<span>{item.icon}</span>
								<span className={`${!isSidebarOpen ? "lg:hidden" : ""} dark:text-white`}>{item.title}</span>
							</NavLink>
						</li>
					))}
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
