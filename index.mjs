import { generateText } from "ai";
import { tokenlab } from "@tokenlab/ai-sdk-provider";

const { text } = await generateText({
  model: tokenlab.chatModel(process.env.TOKENLAB_MODEL || "gpt-5.4"),
  prompt: "Explain TokenLab in one sentence."
});

console.log(text);
