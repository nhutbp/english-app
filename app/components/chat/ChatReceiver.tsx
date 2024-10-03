import React from "react";
import ChatAction from "./ChatAction";
import { formatAiMessage } from "./helpers";

interface ChatReceiverProps {
	content: string;
	timestamp: string;
	isWaiting?: boolean;
    showAction?: boolean;
}

const ChatReceiver: React.FC<ChatReceiverProps> = ({ content, timestamp, isWaiting, showAction = true }) => {
	return (
		<>
            <div className="box-messages flex gap-2.5 justify-end">
                <div className="">
                    <div className="grid mb-2">
                        <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">AI</h5>

                        {isWaiting ? (
                            <div className="flex items-center">
                            <div className='flex space-x-2 justify-center items-center bg-white dark:invert'>
                                <span className='sr-only'>Loading...</span>
                                <div className='h-1 w-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                                <div className='h-1 w-1 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                                <div className='h-1 w-1 bg-black rounded-full animate-bounce'></div>
                            </div>
                            </div>
                        ) : (
                            <div className="px-3 py-2 bg-gray-100 rounded">
                                <div
                                className="text-sm font-normal leading-snug ai-render-content"
                                dangerouslySetInnerHTML={{ __html: formatAiMessage(content) }}
                            />
                            </div>
                        )}

                        <div className="items-center inline-flex justify-between">
                            { showAction && <ChatAction content={content} /> }
                            <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">{timestamp}</h3>
                        </div>
                    </div>
                </div>
                <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="AI image" className="w-10 h-11" />
            </div>
		</>
	);
};

export default ChatReceiver;
