import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: String,
  isSentByUser: Boolean,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
