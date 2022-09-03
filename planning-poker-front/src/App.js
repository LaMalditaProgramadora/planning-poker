import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
