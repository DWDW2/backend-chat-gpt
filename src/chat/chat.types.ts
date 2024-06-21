import { GenerateContentResult } from "@google/generative-ai";

export interface CustomGenerateContentResult extends GenerateContentResult {
  text: string;
}