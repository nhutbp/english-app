import { LayoutProvider } from "~/components/profile/LayoutProvider";
import Sidebar from "~/components/profile/Sidebar";
import Header from "~/components/profile/Header";
import Footer from "../Footer";

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<LayoutProvider>
				<div className="flex mx-auto w-full max-w-screen-xl h-full">
					{/* <Sidebar /> */}
					<div className="flex flex-col w-full">
						<main>{children}</main>
					</div>
				</div>
			</LayoutProvider>
		</>
	);
}
