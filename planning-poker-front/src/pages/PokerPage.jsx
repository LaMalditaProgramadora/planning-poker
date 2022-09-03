import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokerCards from "../components/PokerCards";
import PokerTable from "../components/PokerTable";

import {
  initiateSocket,
  subscribeToMessages,
} from "../helpers/SocketService";

const PokerPage = () => {
  const navigate = useNavigate();

  const [buttonTitle, setButtonTitle] = useState("Revelar");
  const [storyPointsAverage, setStoryPointsAverage] = useState("?");
  const name =
    localStorage.getItem("poker-name") === null
      ? ""
      : localStorage.getItem("poker-name");
  const channel = "planning-poker";
  const [messages, setMessages] = useState([]);

  const goBack = () => {
    navigate("/", { replace: true });
  };

  const changeButtonTitle = () => {
    if (buttonTitle === "Revelar") setButtonTitle("Ocultar");
    else setButtonTitle("Revelar");
  };

  const revealStoryPoints = () => {
    changeButtonTitle();
  };

  useEffect(() => {
    initiateSocket(channel, name);

    subscribeToMessages((err, data) => {
      setMessages(data);
    });
  }, []);

  const PokerAverage = () => {
    return (
      <div className="nes-container with-title is-centered is-dark">
        <p className="title">Promedio</p>
        <p>{storyPointsAverage}</p>
      </div>
    );
  };

  return (
    <>
      <Grid container justifyContent="center" className="grid">
        <PokerAverage />
      </Grid>
      <Grid container justifyContent="center" className="grid">
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={revealStoryPoints}
        >
          {buttonTitle}
        </button>
      </Grid>
      <Grid container justifyContent="center" className="grid">
        <span className="nes-text is-disabled">------------------</span>
      </Grid>
      <Grid container justifyContent="center" className="grid">
        <PokerCards name={name} channel={channel} />
      </Grid>
      <Grid container justifyContent="center" className="grid">
        <PokerTable messages={messages} />
      </Grid>
      <Grid container justifyContent="center" className="grid">
        <button type="button" className="nes-btn is-primary" onClick={goBack}>
          Regresar
        </button>
      </Grid>
    </>
  );
};

export default PokerPage;
