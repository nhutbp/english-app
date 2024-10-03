import { useState, useRef, useEffect } from "react";
import ChatBox from "./ChatBox";
import ChatSender from "./ChatSender";
import ChatReceiver from "./ChatReceiver";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { readTextAloud, translateMessage, GeminiModel } from "./helpers";
import Tabs from "../Tabs";
import Grammar from "./Grammar";

const ChatLayout = () => {
	const [messages, setMessages] = useState<{ sender: string; content: string; timestamp: string }[]>([]);
	const [translatedMessages, setTranslatedMessages] = useState<string[]>([]); // Store translated messages
	const [isWaitingForResponse, setIsWaitingForResponse] = useState(false); // Trạng thái chờ phản hồi từ AI
	const messagesEndRef = useRef<HTMLDivElement | null>(null);
	const translatedMessagesEndRef = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView(false);
		}
		if (translatedMessagesEndRef.current) {
			translatedMessagesEndRef.current.scrollIntoView(false);
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages, translatedMessages]);

	const handleSendMessage = async (newMessage: string) => {
		const timestamp = new Date().toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
		});

		// Thêm tin nhắn người dùng vào
		setMessages((prevMessages) => [...prevMessages, { sender: "Me", content: newMessage, timestamp }]);

		const translatedUserMessage = await translateMessage(newMessage);
		setTranslatedMessages((prevMessages) => [...prevMessages, translatedUserMessage]);
		setIsWaitingForResponse(true);


		try {
            const aiMessage =  await GeminiModel(newMessage, '');
			// Thêm tin nhắn phản hồi từ AI vào
			setMessages((prevMessages) => [...prevMessages, { sender: "AI", content: aiMessage, timestamp: new Date().toLocaleTimeString() }]);
			readTextAloud(aiMessage);

			// Translate AI response and add to the translatedMessages state
			const translatedMessage = await translateMessage(aiMessage);

			setTranslatedMessages((prevMessages) => [...prevMessages, translatedMessage]);
		} catch (error) {
			console.error("Error generating AI content:", error);
		} finally {
			setIsWaitingForResponse(false);
		}
	};

	const tabData = [
		{
			label: "Translate",
			content: (
				<div className="vn-translations border border-gray-200 rounded-lg p-10 max-h-[600px] overflow-y-scroll">
					{translatedMessages.map((msg, index) =>
						messages[index].sender === "AI" ? (
							<ChatReceiver key={index} content={msg} timestamp={messages[index].timestamp} showAction={false} />
						) : (
							<ChatSender key={index} sender={messages[index].sender} content={msg} timestamp={messages[index].timestamp} showAction={false} />
						),
					)}

					{isWaitingForResponse && <ChatReceiver content="..." timestamp={new Date().toLocaleTimeString()} isWaiting={true} showAction={false} />}
					<div ref={translatedMessagesEndRef}></div>
				</div>
			),
		},
		{
			label: "Grammar",
			content: (
				<div className="border border-gray-200 rounded-lg p-10 max-h-[600px] overflow-y-scroll">
					{messages.map((msg, index) =>
						msg.sender !== "AI" && (
							<Grammar key={index} sender={msg.sender} content={msg.content} />
						),
					)}
				</div>
			),
		},
	];

	return (
		<>
			<div className="w-full">
				<div className="grid grid-cols-2 gap-4">
					<div className="border border-gray-200 rounded-lg p-10 max-h-[600px] overflow-y-scroll mt-[40px]">
						{messages.map((msg, index) =>
							msg.sender === "AI" ? (
								<ChatReceiver key={index} content={msg.content} timestamp={msg.timestamp} isWaiting={isWaitingForResponse && index === messages.length - 1} />
							) : (
								<ChatSender key={index} sender={msg.sender} content={msg.content} timestamp={msg.timestamp} />
							),
						)}

						{isWaitingForResponse && <ChatReceiver content="..." timestamp={new Date().toLocaleTimeString()} isWaiting={true} showAction={false} />}
						<div ref={messagesEndRef}></div>
					</div>
					<div>
						<Tabs tabs={tabData} />
					</div>
				</div>
				<div className="mt-10">
					<ChatBox onSendMessage={handleSendMessage} />
				</div>
			</div>
		</>
	);
};

export default ChatLayout;
