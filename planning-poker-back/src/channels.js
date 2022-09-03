const channel = {
  id: 1,
  name: "planning-poker",
  users: [],
};

const addUserToChannel = (name) => {
  channel.users.push(name);
};

export { addUserToChannel };