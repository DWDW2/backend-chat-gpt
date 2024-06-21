import { GenerateContentStreamResult } from "@google/generative-ai";
import chat from "../gemini";
import { CustomGenerateContentResult } from "./chat.types";
import Conservation from "./models/Conservation";

class ChatApp {
  async sendMessageAndReceiveResponse(message: string): Promise<GenerateContentStreamResult> {
    const response = await chat.sendMessageStream(message);
    return response;
  }
  async getAllConservations(){
    const conservations = await Conservation.find();
    return conservations;
  }

  async addNewConservation(id:string) {
    try {
      const conservation = new Conservation({ id: id, messages: [] });
      await conservation.save();
      return conservation;
    } catch (error: any) {
      console.log(error);
      return null;
    }
  }

  async getConservationById(id:string) {
    try {
      const conservation = await Conservation.findOne({ id: id });
      return conservation;
    } catch (error: any) {
      console.log(error);
      return null;
    } 
  }
}

export default ChatApp;