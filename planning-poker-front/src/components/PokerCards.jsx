import { sendStoryPoint } from "../services/SocketService";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@mui/material";

const PokerCards = ({ name, channel }) => {
  const storyPoints = [1, 2, 3, 5, 8, 13, 20, 40];

  const changeMyStoryPoint = (event) => {
    sendMyStoryPoint(event.target.value);
  };

  const sendMyStoryPoint = (storyPoint) => {
    const data = {
      id: uuidv4(),
      channel: channel,
      user: name,
      body: storyPoint,
    };
    sendStoryPoint(data);
  };

  return (
    <Grid container justifyContent="center" className="grid">
      {storyPoints.map((storyPoint, i) => {
        return (
          <button
            type="button"
            key={i}
            className="nes-btn is-success margin-button"
            onClick={changeMyStoryPoint}
            value={storyPoint}
          >
            {storyPoint}
          </button>
        );
      })}
    </Grid>
  );
};

export default PokerCards;
