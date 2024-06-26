import ChatApp from "./chat.service";
import { io } from "../websocket/websocket";
import { Request, Response } from "express";

class chatappController {
  private chatappService: ChatApp;

  constructor(chatappService: ChatApp) {
    this.chatappService = chatappService;
  }

  async handleWebSocketConnection(socket: any, userPrompt: string) {
    try {
      const res: any = await this.chatappService.sendMessageAndReceiveResponse(userPrompt);
      let text = '';

      for await (const chunk of res.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        text += chunkText;
        socket.emit('message', chunkText); 
      }
      socket.emit('message'); 
    } catch (error: any) {
      console.log(error);
      socket.emit('error', error.message); 
    }
  }
}

export default chatappController;