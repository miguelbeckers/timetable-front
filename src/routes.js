import React from "react";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";

const routes = (logged) => {
  return logged ? <Main/> : <PageNotFound/>;
};

export default routes;