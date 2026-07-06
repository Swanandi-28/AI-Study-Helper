import { ChatPromptTemplate, MessagesPlaceholder} from "@langchain/core/prompts";

export const studyPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are an AI Study Helper. Answer clearly and remember previous conversation.",
  ],

  new MessagesPlaceholder("history"),
  ["human", "{question}"],
]);