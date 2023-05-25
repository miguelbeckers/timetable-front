import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {notification} from "antd";
import "./Notification.css";

import lessonConstants from "../store/constants/lessonConstants";
import roomConstants from "../store/constants/roomConstants";
import timeslotConstants from "../store/constants/timeslotConstants";
import timetableConstants from "../store/constants/timetableConstants";
import messageConstants from "../store/constants/messageConstants";

function Notification() {
    let lesson = useSelector(state => state.lesson.current);
    let room = useSelector(state => state.room.current);
    let timeslot = useSelector(state => state.timeslot.current);
    let timetable = useSelector(state => state.timetable.current);
    
    let lessonList = useSelector(state => state.lesson.list);
    let roomList = useSelector(state => state.room.list);
    let timeslotList = useSelector(state => state.timeslot.list);
    let timetableList = useSelector(state => state.timetable.list);

    const DEBUG_MODE = false;

    const dispatch = useDispatch();
    useEffect(() => {
        if (lesson.message) {
            displayMessage(lesson.message);
            dispatch({type: lessonConstants.CLEAR_LESSON_MESSAGE});
        }

        if (lessonList.message) {
            displayMessage(lessonList.message);
            dispatch({type: lessonConstants.CLEAR_LESSON_LIST_MESSAGE});
        }

        if (room.message) {
            displayMessage(room.message);
            dispatch({type: roomConstants.CLEAR_ROOM_MESSAGE});
        }

        if (roomList.message) {
            displayMessage(roomList.message);
            dispatch({type: roomConstants.CLEAR_ROOM_LIST_MESSAGE});
        }

        if (timeslot.message) {
            displayMessage(timeslot.message);
            dispatch({type: timeslotConstants.CLEAR_ROOM_MESSAGE});
        }

        if (timeslotList.message) {
            displayMessage(timeslotList.message);
            dispatch({type: timeslotConstants.CLEAR_ROOM_LIST_MESSAGE});
        }

        if (timetable.message) {
            displayMessage(timetable.message);
            dispatch({type: timetableConstants.CLEAR_ROOM_MESSAGE});
        }

        if (timetableList.message) {
            displayMessage(timetableList.message);
            dispatch({type: timetableConstants.CLEAR_ROOM_LIST_MESSAGE});
        }
    }, [lesson, room, timeslot, timetable, lessonList, roomList, timeslotList , timetableList]);

    const displayMessage = (message) => {
        if (message.type !== messageConstants.INFO || DEBUG_MODE) {
            notification[message.type]({
                message: message.type.toUpperCase(),
                description: message.content,
                placement: "bottomRight",
                bottom: "60px",
                className: "notification",
            });
        }
    };

    return <></>;
}

export default Notification;