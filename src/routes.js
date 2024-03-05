import React from "react";
import {Navigate, Route, Routes} from "react-router";
import Header from "./components/Header";
import Loading from "./components/Loading";
import PageNotFound from "./components/PageNotFound";
import Classrooms from "./components/Classrooms";

const routes = (logged) => {
  return logged ? <div className="page">
    <Header/>
    <div className="content">
      <Routes>
        <Route exect path="/" element={<Navigate to="/classrooms"/>}/>
        <Route path="classrooms" element={<Classrooms/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  </div> : <Loading/>;
};

export default routes;