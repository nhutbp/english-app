import ChatLayout from "~/components/chat/ChatLayout";

export default function Lessons() {
	return (
		<>
			<div className="mx-auto w-full max-w-screen-2xl h-full py-2 px-10">
				<h1 className="font-bold text-2xl mb-5">Communicate with Ai</h1>
				<ChatLayout />
			</div>
		</>
	);
}
