import { createAgent } from "langchain";
import { model } from "./model.js";
import { calculatorTool } from "./tools.js";

export const agent = createAgent({
  model,
  tools: [calculatorTool],
  systemPrompt:
    "You are an AI Study Helper. Use the calculator tool whenever the user asks a math question.",
});