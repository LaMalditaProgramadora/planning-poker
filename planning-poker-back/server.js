import { createServer } from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { addMessage, getMessages, removeUserMessage } from "./src/messages.js";
import { addUserToChannel } from "./src/channels.js";
import { addUser, removeUser } from "./src/users.js";

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 8080;

io.on("connection", (socket) => {
  const { name, channel } = socket.handshake.query;

  socket.join(channel);
  addUser(name, socket.id);
  addUserToChannel(name);

  socket.on("MESSAGE_SEND", (data) => {
    addMessage(data);
    const { channel } = data;
    socket.broadcast.to(channel).emit("NEW_MESSAGE", getMessages());
  });

  socket.on("disconnect", () => {
    removeUser(name);
    removeUserMessage(name);
  });
});

server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
