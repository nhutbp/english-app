// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import TopUser from "~/components/TopUser";

export const meta: MetaFunction = () => {
	return [{ title: "My Remix App" }, { name: "description", content: "Welcome to my Remix app!" }];
};

export default function Index() {
	return (
		<>
			<div className="grid md:grid-cols-4 p-5 gap-5">
				<section className=" col-span-3">
					<div className="w-full">
						<div className="grid md:grid-cols-3 bg-white dark:bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg px-8 pt-8 pb-4 mb-8">
							<div className="col-span-2">
								<a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
									<svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
										<path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
									</svg>
									Tutorial
								</a>
								<h1 className="text-gray-900 dark:text-white text-2xl md:text-4xl font-extrabold mb-2">Wellcome back, You</h1>
								<p className="text-md font-normal text-gray-500 dark:text-gray-400 mb-6">Website communicating with AI</p>
								<Link
									to="/chat"
									className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
									Communicate with Ai
									<svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
									</svg>
								</Link>
							</div>
							<div className="col-span-1 text-right">
								<img src="/images/image-banner.png" className="max-w-[200px] float-right" />
							</div>
						</div>
					</div>
				</section>
				<section className="col-span-1">
					<div className="w-full">
						<TopUser />
					</div>
				</section>
			</div>
		</>
	);
}
