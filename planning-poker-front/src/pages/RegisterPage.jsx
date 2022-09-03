import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(
    localStorage.getItem("poker-name") === null
      ? ""
      : localStorage.getItem("poker-name")
  );

  const register = () => {
    if (name !== "") {
      localStorage.setItem("poker-name", name);
      navigate("/poker", { replace: true });
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const RegisterInput = () => {
    return (
      <>
        <div className="nes-field register-field">
          <label>Tu nombre</label>
          <input
            autoFocus="autoFocus"
            type="text"
            className="nes-input is-dark register-input"
            value={name}
            onChange={handleChangeName}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <Grid container justifyContent="center" className="grid">
        <RegisterInput />
      </Grid>
      <Grid container justifyContent="center" className="grid">
        <button type="button" className="nes-btn is-primary" onClick={register}>
          Ingresar
        </button>
      </Grid>
    </>
  );
};

export default RegisterPage;
