import React from "react";
import ChatAction from "./ChatAction";

interface ChatSenderProps {
	sender: string;
	content: string;
	timestamp: string;
	showAction?: boolean;
}
const ChatSender: React.FC<ChatSenderProps> = ({ sender, content, timestamp, showAction = true }) => {
	return (
		<>
            <div className="flex gap-2.5">
                <img src="https://pagedone.io/asset/uploads/1710412177.png" alt="Shanay image" className="w-10 h-11" />
                <div className="grid">
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1 dark:text-white">{sender}</h5>
                    <div className="w-full grid">
                        <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
                            <h5 className="text-gray-900 text-sm font-normal leading-snug">{content}</h5>
                        </div>
                        <div className="justify-between items-center inline-flex">
                            {showAction && <ChatAction content={content} />}
                            <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">{timestamp}</h6>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
};

export default ChatSender;
