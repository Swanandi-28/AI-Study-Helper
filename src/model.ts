import "dotenv/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_API_KEY is missing. Please add it to your .env file.");
}

export const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey,
  temperature: 0.3,
});