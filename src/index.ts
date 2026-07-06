import "dotenv/config";
import { askQuestion } from "./chat.js";

async function main() {
    console.log(await askQuestion("What is Artificial Intelligence?"));

    console.log("--------------------------------");

    console.log(await askQuestion("Can you explain it in one sentence?"));
 
}

main().catch(console.error);