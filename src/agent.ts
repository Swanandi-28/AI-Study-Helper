export function supervisorAgent(question: string) {
  if (question.toLowerCase().includes("math")) {
    return "Use Calculator Tool";
  }

  if (question.toLowerCase().includes("history")) {
    return "Use Knowledge Tool";
  }

  return "Use Gemini Model";
}