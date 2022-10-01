import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid container direction="row" justifyContent="center" sx={{ pt: 5 }}>
      <Grid item xs={8}>
        <section className="nes-container with-title is-dark is-centered is-rounded">
          <h3>Planning Poker</h3>
          <br></br>
          <Outlet />
        </section>
      </Grid>
    </Grid>
  );
};

export default Layout;
