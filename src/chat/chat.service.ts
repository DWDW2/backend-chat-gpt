import { GenerateContentStreamResult } from "@google/generative-ai";
import chat from "../gemini";
import { CustomGenerateContentResult } from "./chat.types";

class ChatApp {
  async sendMessageAndReceiveResponse(message: string): Promise<GenerateContentStreamResult> {
    const response = await chat.sendMessageStream(message);
    return response;
  }
}

export default ChatApp;