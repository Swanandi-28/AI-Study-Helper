import { studyPrompt } from "./prompt.js";
import { model } from "./model.js";

export const studyChain = studyPrompt.pipe(model);