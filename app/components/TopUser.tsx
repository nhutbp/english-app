interface TopUserProps {
	rank: string;
	name: string;
	image: string;
	bgColor: string;
}

const TopUser: React.FC<TopUserProps> = ({ rank, name, image, bgColor }) => (
	<a href="#" className="flex my-1 hover:bg-gray-100 dark:hover:bg-gray-700">
		<div className="flex-shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 rounded-xl">
			<img className="rounded-full w-8 h-8" src={image} alt="Joseph image" />
		</div>
		<div className="w-full ps-3">
			<div className="text-gray-500 text-sm mb-1 dark:text-gray-400">
				<span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
			</div>
			<div className="text-xs text-gray-600 dark:text-white">visited 20h</div>
		</div>
	</a>
);

export default function Leaderboard() {
	const leaders = [
		{ name: "Salsabila P", rank: "3rd", image: "/images/image-banner.png", bgColor: "bg-orange-100" },
		{ name: "Syahru M", rank: "1st", image: "/images/image-banner.png", bgColor: "bg-yellow-100" },
		{ name: "Aditya A", rank: "3rd", image: "/images/image-banner.png", bgColor: "bg-blue-100" },
	];

	return (
		<div className="flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white dark:bg-gray-900 rounded-lg p-5">
            <h3 className="font-bold mb-2 text-xl">Top</h3>
			{leaders.map((leader, index) => (
				<TopUser key={index} {...leader} />
			))}
		</div>
	);
}
