import { Router } from "express";
import { io } from "../websocket/websocket";
import chatappController from "./chat.controller";
import ChatApp from "./chat.service";
const router = Router();

const ChatAppInstance = new ChatApp();
const ChatAppController = new chatappController(ChatAppInstance);


io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", async (msg) => {
    ChatAppController.handleWebSocketConnection(io, msg)
  })
})

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default router;