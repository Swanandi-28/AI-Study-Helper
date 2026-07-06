import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { studyChain } from "./chain.js";

const chatHistory = [
  new HumanMessage("What is Artificial Intelligence?"),
  new AIMessage(
    "Artificial Intelligence is the simulation of human intelligence by machines."
  ),
];

export async function askQuestion(question: string) {
  const response = await studyChain.invoke({
    question,
    history: chatHistory,
  });

  chatHistory.push(new HumanMessage(question));
  chatHistory.push(new AIMessage(String(response.content)));

  return response.content;
}