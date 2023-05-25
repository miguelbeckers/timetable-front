import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {notification} from "antd";
import messageConstants from "../store/constants/messageConstants";
import "./Notification.css";

function Notification() {
    const DEBUG_MODE = false;

    const lessonMessage = useSelector(state => state.lesson.current.message);
    const roomMessage = useSelector(state => state.room.current.message);
    const timeslotMessage = useSelector(state => state.timeslot.current.message);
    const timetableMessage = useSelector(state => state.timetable.current.message);
    const lessonListMessage = useSelector(state => state.lesson.list.message);
    const roomListMessage = useSelector(state => state.room.list.message);
    const timeslotListMessage = useSelector(state => state.timeslot.list.message);
    const timetableListMessage = useSelector(state => state.timetable.list.message);

    useEffect(() => {
        const openNotification = (message) => {
            if (message && (message.type === messageConstants.FAIL || DEBUG_MODE)) {
                notification[message.type]({
                    message: message.content,
                    description: message.content,
                    placement: "bottomLeft"
                });
            }
        };

        if (lessonMessage) openNotification(lessonMessage);
        if (lessonListMessage) openNotification(lessonListMessage);
        if (roomMessage) openNotification(roomMessage);
        if (roomListMessage) openNotification(roomListMessage);
        if (timeslotMessage) openNotification(timeslotMessage);
        if (timeslotListMessage) openNotification(timeslotListMessage);
        if (timetableMessage) openNotification(timetableMessage);
        if (timetableListMessage) openNotification(timetableListMessage);

    }, [
        DEBUG_MODE, lessonMessage, roomMessage, timeslotMessage, timetableMessage,
        lessonListMessage, roomListMessage, timeslotListMessage, timetableListMessage
    ]);


    return <></>;
}

export default Notification;
