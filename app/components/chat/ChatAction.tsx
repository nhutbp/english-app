import { readTextAloud, translateMessage } from "./helpers";
import React from "react";

interface ChatActionProps {
	content: string;
}

const ChatAction: React.FC<ChatActionProps> = ({ content }) => {
	// Function to read the text aloud
	const handleActionRead = () => {
		if (content) {
			readTextAloud(content);
		}
	};

	return (
		<div className="flex gap-3 empty:hidden -ml-2">
			<div className="items-center justify-start rounded-xl p-1 flex">
				<div className="flex items-center gap-2 ps-1">
					<span>
						<button
							onClick={handleActionRead}
							className="rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary"
							aria-label="Read aloud"
							data-testid="voice-play-turn-action-button">
							<span className="flex items-center justify-center">
								<svg
									className="w-[20px] h-[20px] text-gray-800 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="none"
									viewBox="0 0 20 20">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1"
										d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"
									/>
								</svg>
							</span>
						</button>
					</span>

					<span>
						<button
							className="rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary"
							aria-label="Copy text"
							data-testid="copy-turn-action-button"
							onClick={() => navigator.clipboard.writeText(content)}>
							<span className="flex items-center justify-center">
								<svg
									className="w-[20px] h-[20px] text-gray-800 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24">
									<path
										stroke="currentColor"
										strokeLinejoin="round"
										strokeWidth="1"
										d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"
									/>
								</svg>
							</span>
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ChatAction;
