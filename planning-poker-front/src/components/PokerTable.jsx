const PokerTable = ({messages}) => {
  return (
    <div className="nes-table-responsive">
      <table className="nes-table is-bordered is-dark is-centered table-relative">
        <thead>
          <tr>
            <th className="table-cell">Nombre</th>
            <th className="table-cell">Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, i) => {
            return (
              <tr key={i}>
                <td className="table-cell">{message.user}</td>
                <td className="table-cell">{message.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PokerTable;
