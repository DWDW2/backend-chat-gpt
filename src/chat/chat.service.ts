import { GenerateContentStreamResult } from "@google/generative-ai";
import chat from "../gemini";
import { CustomGenerateContentResult } from "./chat.types";
import { Request, Response } from "express";
import Conservation from "./models/Conservation";

class ChatApp {
  async sendMessageAndReceiveResponse(message: string): Promise<GenerateContentStreamResult> {
    const response = await chat.sendMessageStream(message);
    return response;
  }
  async createConversation (req:Request, res:Response) {

    const message = req.body.message
    const messagesMongo = new Conservation({messages: []})
    const id = messagesMongo.id
    console.log(id)
    messagesMongo.save()
    await res.set('id', id)
  }
  async saveMessages(req: Request, res: Response) {
    const id = req.body.id
    const message = req.body.message

    await Conservation.findByIdAndUpdate(id, {messages: message})
  }
}

export default ChatApp;