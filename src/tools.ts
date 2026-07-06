import { tool } from "@langchain/core/tools";
import { z } from "zod";

export const calculatorTool = tool(
  async ({ expression }) => {
    try {
      // NOTE: Only for demonstration purposes.
      const result = eval(expression);
      return `The answer is ${result}`;
    } catch {
      return "Invalid mathematical expression.";
    }
  },
  {
    name: "calculator",
    description: "Useful for solving basic math expressions.",
    schema: z.object({
      expression: z.string(),
    }),
  }
);