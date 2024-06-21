import { Router } from "express";
import { io } from "../websocket/websocket";
import chatappController from "./chat.controller";
import ChatApp from "./chat.service";
import Conservation from "./models/Conservation";
const router = Router();

const ChatAppInstance = new ChatApp();
const ChatAppController = new chatappController(ChatAppInstance);


io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on('joinConversation', async (conversationId) => {
    const conversation = await Conservation.findById(conversationId);
    if (conversation) {
      socket.join(conversationId);
      socket.emit('init', conversation.messages);
    }
  })
  socket.on("message", async (msg) => {
    ChatAppController.handleWebSocketConnection(io, msg)
  })
})

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default router;