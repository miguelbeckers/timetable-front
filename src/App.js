import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Loading from "./components/Loading";
import Notification from "./components/Notification";
import routes from "./routes";
import history from "./history";

function App() {
  const logged = true;
  const loading = false;
  return loading ? <Loading /> : routes(logged);
}

const AppWrapper = () => {
  return (
    <BrowserRouter history={history}>
      <Notification />
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;