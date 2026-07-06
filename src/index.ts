import "dotenv/config";
import { studyChain } from "./chain.js";
import { agent } from "./agent.js";

async function main() {

  console.log("========== CHAIN ==========\n");

  const chainResponse = await studyChain.invoke({
    question: "Explain Artificial Intelligence in simple words.",
    history: [],
  });

  console.log(chainResponse.content);

  console.log("\n========== AGENT ==========\n");

  const result = await agent.invoke({
    messages: [
      {
        role: "user",
        content: "What is 45 * 12 + 18 ?",
      },
    ],
  });

  console.log(result.messages.at(-1)?.content);
}

main().catch(console.error);