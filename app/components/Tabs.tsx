import React, { useState } from "react";

interface Tab {
	label: string;
	content: JSX.Element;
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<div className="w-full">
			{/* Tab headers */}
			<div className="flex space-x-4 border-b-2 border-gray-200">
				{tabs.map((tab, index) => (
					<button key={index} onClick={() => setActiveTab(index)} className={`py-2 px-4 font-semibold ${activeTab === index ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}>
						{tab.label}
					</button>
				))}
			</div>

			{/* Tab content */}
			<div className="mt-4">{tabs[activeTab] && <div>{tabs[activeTab].content}</div>}</div>
		</div>
	);
};

export default Tabs;
