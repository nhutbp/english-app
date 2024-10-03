import React, { useState, useEffect } from "react";
import { GeminiModel, formatAiMessage } from "./helpers";

interface GrammarProps {
    sender: string;
    content: string;
}

const Grammar: React.FC<GrammarProps> = ({ sender, content }) => {
    const [aiMessage, setAiMessage] = useState<string>(""); // Lưu kết quả AI trả về dưới dạng chuỗi
    const [loading, setLoading] = useState<boolean>(true); // Quản lý trạng thái loading

    useEffect(() => {
        const fetchAIResponse = async () => {
            const cachedResult = sessionStorage.getItem(content); // Lấy kết quả từ sessionStorage nếu có
            if (cachedResult) {
                setAiMessage(cachedResult); // Nếu đã có cache, hiển thị kết quả từ cache
                setLoading(false);
            } else {
                try {
                    setLoading(true);
                    const aiMessage = await GeminiModel(content, 'Hãy đưa ra cấu trúc ngữ pháp của đoạn sau, nếu có sai thì sửa lại:');
                    sessionStorage.setItem(content, aiMessage); // Lưu kết quả vào sessionStorage
                    setAiMessage(aiMessage); // Cập nhật state với kết quả mới
                } catch (error) {
                    console.error("Error generating AI content:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchAIResponse();
    }, [content]);

    return (
        <div className="flex gap-2.5 mb-5">
            <img src="https://pagedone.io/asset/uploads/1710412177.png" alt="Shanay image" className="w-10 h-11" />
            <div className="grid">
                <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">{sender}</h5>
                <div className="grid">
                    <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
                        <h5 className="text-gray-900 text-sm font-normal leading-snug">{content}</h5>
                    </div>
                    {loading ? (
                        <p>Đang kiểm tra...</p>
                    ) : (
                        <div className="px-3.5 py-2 mt-2 bg-gray-200 rounded justify-start items-center gap-3 inline-flex">
                            {/* Sử dụng dangerouslySetInnerHTML để hiển thị kết quả AI */}
                            <div
                                className="text-gray-900 text-sm font-normal leading-snug ai-render-content"
                                dangerouslySetInnerHTML={{ __html: formatAiMessage(aiMessage) }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Grammar;
