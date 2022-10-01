import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

export let socket;
const REACT_APP_SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

export const initiateSocket = (channel, name) => {
  socket = io(REACT_APP_SOCKET_URL, {
    query: { channel, name },
  });

  if (socket && channel) {
    const data = {
      id: uuidv4(),
      channel: channel,
      user: name,
      body: "?",
    };
    socket.emit("NEW_POINT", data);
  }
};

export const subscribeToStoryPointsChange = (callback) => {
  socket.on("NEW_POINT", (data) => {
    callback(null, data);
  });
};

export const subscribeToIsVisibleChange = (callback) => {
  socket.on("NEW_IS_VISIBLE", (data) => {
    callback(null, data);
  });
};

export const sendStoryPoint = (data) => {
  socket.emit("NEW_POINT", data);
};

export const sendIsVisible = (data) => {
  socket.emit("NEW_IS_VISIBLE", data);
};
