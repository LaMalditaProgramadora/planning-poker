let storyPoints = [];
let isVisible = false;

const changeIsVisible = (value) => {
  isVisible = value;
};

const addStoryPoint = (data) => {
  let findName = false;
  storyPoints.forEach((storyPoint) => {
    if (storyPoint.user === data.user) {
      findName = true;
      storyPoint.body = data.body;
    }
  });
  if (findName === false) storyPoints.push(data);
};

const removeUserStoryPoint = (name) => {
  storyPoints = storyPoints.filter((storyPoint) => storyPoint.user !== name);
};

const getStoryPoints = () => {
  return storyPoints;
};

const getStoryPointsAverage = () => {
  let sum = 0;
  let cont = 0;
  storyPoints.forEach((storyPoint) => {
    if (storyPoint.body !== "?") {
      sum += Number(storyPoint.body);
      cont++;
    }
  });
  return cont === 0 ? 0 : sum / cont;
};

const getStoryPointsResponse = () => {
  let response = {};
  response.storyPoints = getStoryPoints();
  response.storyPointsAverage = getStoryPointsAverage();
  response.isVisible = isVisible;
  return response;
};

export {
  removeUserStoryPoint,
  addStoryPoint,
  getStoryPointsResponse,
  changeIsVisible
};
