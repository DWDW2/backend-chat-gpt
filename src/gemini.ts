import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI= new GoogleGenerativeAI('AIzaSyDBvkSfTeqPqBdT1PfWD_Y2-MIVQMia6tQ');

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})

const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello, I have 2 dogs in my house." }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  })

export default chat