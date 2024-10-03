import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { LayoutProvider } from "./components/layouts/LayoutProvider";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen">
				<>
					<LayoutProvider>
						<div className="flex h-screen overflow-y-hidden">
							<Sidebar />
							<div className="flex flex-col flex-1">
								<Header />
								<main className="overflow-hidden overflow-y-scroll bg-white dark:bg-black">{children}</main>
							</div>
						</div>
					</LayoutProvider>
					<ScrollRestoration />
					<Scripts />
				</>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
