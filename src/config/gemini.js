
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyBkXdrpJ24VrWCfTqKfTQakOuO61MBMERU";

const ai = new GoogleGenAI({ apiKey });

const runChat = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

export default runChat;