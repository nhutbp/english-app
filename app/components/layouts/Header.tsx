import { useState } from "react";
import { UseLayoutContext } from "~/components/layouts/LayoutProvider";

const Header = () => {
	const { isSidebarOpen, toggleSidebar, isDarkMode, toggleDarkMode } = UseLayoutContext();
	const [isNotificationShow, setIsNotificationShow] = useState(false);
	const [isProfileShow, setIsProfileShow] = useState(false);

	const toggleNotificationShow = () => {
		setIsNotificationShow(!isNotificationShow);
		setIsProfileShow(false); // Đóng profile khi mở notification
	};

	const toggleProfileShow = () => {
		setIsProfileShow(!isProfileShow);
		setIsNotificationShow(false); // Đóng notification khi mở profile
	};

	return (
		<header className="flex-shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white dark:bg-gray-900">
			<div className="flex items-center justify-between p-2">
				<div className="flex items-center space-x-3">
					<span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">K-WD</span>
					<button onClick={toggleSidebar} className="p-2 rounded-md focus:outline-none focus:ring">
						<svg
							className={`w-4 h-4 text-gray-600 dark:text-white ${isSidebarOpen ? "transform transition-transform -rotate-180" : ""}`}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
						</svg>
					</button>
				</div>
				{/* Mobile Search */}
				<div className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden hidden">
					<div className="absolute inset-x-0 flex items-center justify-between p-2 bg-white shadow-md">
						<div className="flex items-center flex-1 px-2 space-x-2">
							<span>
								<svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</span>
							<input type="text" placeholder="Search" className="w-full px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none" />
						</div>
						<button className="flex-shrink-0 p-4 rounded-md">
							<svg className="w-4 h-4 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
				<div className="relative flex items-center space-x-3">
					<div className="items-center hidden px-2 space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">
						<span>
							<svg className="w-5 h-5 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</span>
						<input
							type="text"
							placeholder="Search"
							className="px-4 py-3 rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none md:focus:bg-gray-100 md:focus:shadow md:focus:border"
						/>
					</div>

					<button className="p-2 bg-gray-100 rounded-full md:hidden focus:outline-none focus:ring hover:bg-gray-200">
						<svg className="w-6 h-6 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>

					<div className="items-center hidden space-x-3 md:flex">
						<div className="relative">
							<div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
							<div className="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
							<button onClick={toggleNotificationShow} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
								<svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button>
							<div className={`${!isNotificationShow ? "hidden " : ""}absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg -translate-x-3/4 min-w-max`}>
								<div className="p-4 font-medium border-b">
									<span className="text-gray-800">Notification</span>
								</div>
								<ul className="flex flex-col p-2 my-2 space-y-1">
									<li>
										<a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
											Link
										</a>
									</li>
									<li>
										<a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
											Another Link
										</a>
									</li>
								</ul>
								<div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
									<a href="#">See All</a>
								</div>
							</div>
						</div>
					</div>
                    <button onClick={toggleDarkMode} className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
						{isDarkMode ? (
							<svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                                clip-rule="evenodd"
                            />
                        </svg>
						) : (
                            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
								/>
							</svg>
						)}
					</button>
					<div className="relative">
						<button onClick={toggleProfileShow} className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
							<img
								className="object-cover w-8 h-8 rounded-full"
								src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
								alt="Ahmed Kamel"
							/>
						</button>
						<div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
						<div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>
                
						<div className={`${!isProfileShow ? "hidden " : ""}absolute mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max`}>
							<div className="flex flex-col p-4 space-y-1 font-medium border-b">
								<span className="text-gray-800">Ahmed Kamel</span>
								<span className="text-sm text-gray-400">ahmed.kamel@example.com</span>
							</div>
							<ul className="flex flex-col p-2 my-2 space-y-1">
								<li>
									<a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
										Link
									</a>
								</li>
								<li>
									<a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
										Another Link
									</a>
								</li>
							</ul>
							<div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
								<a href="#">Logout</a>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</header>
	);
};

export default Header;
