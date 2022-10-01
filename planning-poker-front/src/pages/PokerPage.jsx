import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokerCards from "../components/PokerCards";
import PokerTable from "../components/PokerTable";

import {
  initiateSocket,
  subscribeToIsVisibleChange,
  subscribeToStoryPointsChange,
} from "../services/SocketService";
import PokerAverage from "./PokerAverage";

const PokerPage = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [storyPointsAverage, setStoryPointsAverage] = useState("?");
  const name =
    localStorage.getItem("poker-name") === null
      ? null
      : localStorage.getItem("poker-name");
  const channel = "planning-poker";
  const [storyPoints, setStoryPoints] = useState([]);

  const goBack = () => {
    navigate("/", { replace: true });
  };

  const init = () => {
    if (name === null) {
      goBack();
    } else {
      initiateSocket(channel, name);
    }
  };

  useEffect(() => {
    init();
    if (name !== null) {
      subscribeToStoryPointsChange((err, data) => {
        setStoryPoints(data.storyPoints);
        setStoryPointsAverage(data.storyPointsAverage.toFixed(1));
        setIsVisible(data.isVisible);
      });
      subscribeToIsVisibleChange((err, data) => {
        setIsVisible(data);
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PokerAverage
        storyPointsAverage={storyPointsAverage}
        isVisible={isVisible}
      />
      <Grid container justifyContent="center" className="grid">
        <span className="nes-text is-disabled">------------------</span>
      </Grid>
      <PokerCards name={name} channel={channel} />
      <PokerTable storyPoints={storyPoints} isVisible={isVisible} name={name} />
      <Grid container justifyContent="center" className="grid">
        <button type="button" className="nes-btn is-primary" onClick={goBack}>
          Regresar
        </button>
      </Grid>
    </>
  );
};

export default PokerPage;
