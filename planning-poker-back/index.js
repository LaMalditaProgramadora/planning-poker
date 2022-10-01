import { createServer } from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";

import { socketLogic } from "./socket.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_FRONTEND_URL,
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  socketLogic(socket);
});

server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
