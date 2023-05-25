import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllLessons} from "../store/actions/lessonActions";
import {getAllRooms} from "../store/actions/roomActions";
import {getAllTimeslots} from "../store/actions/timeslotActions";

import "./Main.css";

function Main() {
    const dispatch = useDispatch();

    const lesson = useSelector(state => state.lesson);
    const room = useSelector(state => state.room);
    const timeslot = useSelector(state => state.timeslot);
    const timetable = useSelector(state => state.timetable);

    useEffect(() => {
        dispatch(getAllLessons());
        dispatch(getAllRooms());
        dispatch(getAllTimeslots());
    }, [dispatch]);


    return (<>
        hello
    </>);
}

export default Main;