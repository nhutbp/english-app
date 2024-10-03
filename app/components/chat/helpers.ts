import translate from "translate";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const readTextAloud = (text: string, lang:string = "en-US") => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
};

export const translateMessage = async (message: string) => {
    try {
        const translatedText = await translate(message, { to: "vi" });
        return translatedText;
    } catch (error) {
        console.error("Translation error:", error);
        return "Error translating message";
    }
};

export const GeminiModel = async (message: string, prompt: string) => {
    try {
        const genAI = new GoogleGenerativeAI("AIzaSyApyWpTlJMh-vsnvW_KMLhJjsUlKTB0Wdw");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const promptRen = `${prompt} ${message}`
        const response = await model.generateContent(promptRen);
        const result = response.response.text();
        return result;
    } catch (error) {
        console.error("Translation error:", error);
        return "Error translating message";
    }
};

export const formatAiMessage = (message: string) => {
    // Thay các ký tự xuống dòng thành thẻ <br> để hiển thị đoạn văn
    const formattedMessage = message
        // .replace(/\n/g, "<br />") // Thay thế xuống dòng bằng <br>
        .replace(/\. /g, ".<br />") // Thêm xuống dòng sau mỗi dấu chấm và khoảng trắng
        .replace(/\*\*(.*?)\:\*\*/g, "<h2>$1</h2>")
        .replace(/\*\*(.*?)\:\*\*/g, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>") // Thay thế "# " bằng <h1>
        .replace(/^## (.*$)/gim, "<h2>$1</h2>") // Thay thế "## " bằng <h2>
        .replace(/^### (.*$)/gim, "<h3>$1</h3>") // Thay thế "### " bằng <h3>
        .replace(/^#### (.*$)/gim, "<h4>$1</h4>") // Thay thế "#### " bằng <h4>
        .replace(/^##### (.*$)/gim, "<h5>$1</h5>") // Thay thế "##### " bằng <h5>
        .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
        .replace(/\*/g, "");
    return formattedMessage;
};
