import {
  addStoryPoint,
  getStoryPointsResponse,
  removeUserStoryPoint,
  changeIsVisible,
} from "./src/storyPoints.js";
import { addUserToChannel } from "./src/channels.js";
import { addUser, removeUser } from "./src/users.js";

export const socketLogic = (socket) => {
  const { name, channel } = socket.handshake.query;

  socket.join(channel);
  addUser(name, socket.id);
  addUserToChannel(name);

  socket.on("NEW_POINT", (data) => {
    addStoryPoint(data);
    socket.broadcast.to(channel).emit("NEW_POINT", getStoryPointsResponse());
  });

  socket.on("NEW_IS_VISIBLE", (data) => {
    changeIsVisible(data);
    socket.broadcast.to(channel).emit("NEW_IS_VISIBLE", data);
  });

  socket.on("disconnect", () => {
    removeUserStoryPoint(name);
    removeUser(name);
    socket.broadcast.to(channel).emit("NEW_POINT", getStoryPointsResponse());
  });
};
