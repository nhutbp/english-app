import { useState, useRef } from "react";

const ChatBox = ({ onSendMessage }: { onSendMessage: (message: string) => void }) => {
	const [inputValue, setInputValue] = useState("");
	const [isListening, setIsListening] = useState(false);
	const recognitionRef = useRef<any>(null);

	const toggleListening = () => {
		if (isListening) {
			stopListening();
		} else {
			startListening();
		}
	};

	const startListening = () => {
		if ("webkitSpeechRecognition" in window) {
			recognitionRef.current = new (window as any).webkitSpeechRecognition();
			recognitionRef.current.lang = "en-US"; //"vi-VN"
			recognitionRef.current.continuous = true;
			recognitionRef.current.interimResults = false;

			recognitionRef.current.onstart = () => {
				setIsListening(true);
			};

			recognitionRef.current.onresult = (event: any) => {
				setInputValue(event.results[0][0].transcript);
			};

			recognitionRef.current.onerror = (event: any) => {
				console.error(event.error);
			};

			recognitionRef.current.start();
		} else {
			console.log("Web Speech API is not supported in this browser.");
		}
	};

	const stopListening = () => {
		if (recognitionRef.current) {
			recognitionRef.current.stop();
			setIsListening(false);
		}
	};

	const handleSend = () => {
		if (inputValue.trim()) {
			onSendMessage(inputValue.trim());
			setInputValue("");
		}
	};

	return (
		<>
			<div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
				<div className="flex items-center w-full gap-2">
					<input
						className="grow w-full h-10 shrink basis-0 text-black text-md font-medium leading-4 focus:outline-none"
						placeholder="Type here..."
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSend();
							}
						}}
					/>
				</div>
				<div className="flex items-center gap-2">
					<button className="voice" onClick={toggleListening}>
						{isListening ? (
							<svg className="w-[30px] h-[30px] text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
								/>
							</svg>
						) : (
							<svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
								/>
							</svg>
						)}
					</button>
					<button className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow" onClick={handleSend}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<g id="Send 01">
								<path
									id="icon"
									d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
									stroke="white"
									strokeWidth="1.6"
									strokeLinecap="round"
								/>
							</g>
						</svg>
						<h3 className="text-white text-xs font-semibold leading-4 px-2">Send</h3>
					</button>
				</div>
			</div>
		</>
	);
};

export default ChatBox;
