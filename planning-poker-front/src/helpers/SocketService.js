import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

export let socket;
const SOCKET_URL = "http://localhost:8080";

export const initiateSocket = (channel, name) => {
  socket = io(SOCKET_URL, {
    query: { channel, name },
  });

  if (socket && channel) {
    const data = {
      id: uuidv4(),
      channel: channel,
      user: name,
      body: "?",
    };
    socket.emit("MESSAGE_SEND", data);
  }
};

export const subscribeToMessages = (callback) => {
  socket.on("NEW_MESSAGE", (data) => {
    callback(null, data);
  });
};

export const sendMessage = (data) => {
  socket.emit("MESSAGE_SEND", data);
};
