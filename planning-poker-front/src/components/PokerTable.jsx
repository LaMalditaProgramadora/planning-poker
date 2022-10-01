import { Grid } from "@mui/material";

const PokerTable = ({ storyPoints, isVisible, name }) => {
  const viewPoint = (storyPoint) => {
    return isVisible || storyPoint.user === name;
  };

  return (
    <Grid container justifyContent="center" className="grid">
      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-dark is-centered table-relative">
          <thead>
            <tr>
              <th className="table-cell">Nombre</th>
              <th className="table-cell">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {storyPoints.map((storyPoint, i) => {
              return (
                <tr key={i}>
                  <td className="table-cell">{storyPoint.user}</td>
                  <td className="table-cell">
                    {viewPoint(storyPoint) ? storyPoint.body : "?"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Grid>
  );
};

export default PokerTable;
