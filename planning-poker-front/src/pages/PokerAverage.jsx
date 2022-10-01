import { Grid } from "@mui/material";
import { sendIsVisible } from "../services/SocketService";

const PokerAverage = ({ storyPointsAverage, isVisible }) => {
  const changeStoryPointsView = () => {
    sendIsVisible(!isVisible);
  };

  return (
    <>
      <Grid container justifyContent="center" className="grid">
        <div className="nes-container with-title is-centered is-dark">
          <p className="title">Promedio</p>
          <p>{isVisible ? storyPointsAverage : "?"}</p>
        </div>
      </Grid>
      <Grid container justifyContent="center" className="grid">
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={changeStoryPointsView}
        >
          {isVisible ? "Ocultar" : "Revelar"}
        </button>{" "}
      </Grid>
    </>
  );
};

export default PokerAverage;
