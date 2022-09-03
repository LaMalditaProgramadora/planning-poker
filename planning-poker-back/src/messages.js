let messages = [];

const addMessage = (data) => {
  let findName = false;
  messages.forEach((message) => {
    if (message.user === data.user) {
      findName = true;
      message.body = data.body;
    }
  });
  if (findName === false) messages.push(data);
};

const removeUserMessage = (name) => {
  messages = messages.filter((message) => message.user !== name);
};

const getMessages = () => {
  return messages;
};

export { removeUserMessage, addMessage, getMessages };
