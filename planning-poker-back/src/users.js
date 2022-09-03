const users = {};

const addUser = (name, socketId) => {
  if (!users.hasOwnProperty(name)) {
    users[name] = socketId;
  }
};

const removeUser = (name) => {
  if (users.hasOwnProperty(name)) {
    delete users[name];
  }
};

const getUsers = () => {
  return users;
};

export { getUsers, addUser, removeUser };
