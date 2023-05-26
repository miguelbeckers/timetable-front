import React from "react";
import {Navigate, Route, Routes} from "react-router";
import Header from "./components/Header";
import Loading from "./components/Loading";
import PageNotFound from "./pages/PageNotFound";
import Classrooms from "./pages/Classrooms";
import Lessons from "./pages/Lessons";
import Timeslots from "./pages/Timeslots";
import Timetable from "./pages/Timetable";

const routes = (logged) => {
  return logged ? <div className="page">
    <Header/>
    <div className="content">
      <Routes>
        <Route exect path="/" element={<Navigate to="/timetable"/>}/>
        <Route path="timetable" element={<Timetable/>}/>
        <Route path="classrooms" element={<Classrooms/>}/>
        <Route path="lessons" element={<Lessons/>}/>
        <Route path="timeslots" element={<Timeslots/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  </div> : <Loading/>;
};

export default routes;