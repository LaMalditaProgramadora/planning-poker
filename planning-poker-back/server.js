import { createServer } from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";

import { socketLogic } from "./socket.js";

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 8080;

io.on("connection", (socket) => {
 socketLogic(socket)
});

server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
