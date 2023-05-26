import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllLessons} from "../store/actions/lessonActions";
import {getAllClassrooms} from "../store/actions/classroomActions";
import {getAllTimeslots} from "../store/actions/timeslotActions";

import {Button} from "antd";
import {RedoOutlined, PlayCircleOutlined} from "@ant-design/icons";

import ScheduleTable from "../components/ScheduleTable";
import "./Timetable.css";

function Timetable() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLessons());
        dispatch(getAllClassrooms());
        dispatch(getAllTimeslots());
    }, [dispatch]);

    let lessons = useSelector(state => state.lesson.list.data);
    const classrooms = useSelector(state => state.classroom.list.data);
    const timeslots = useSelector(state => state.timeslot.list.data);

    return (
        <div className={"timetable"}>
            <div className={"buttons"}>
                <Button size={"large"} icon={<RedoOutlined/>}>Refresh</Button>
                <Button type={"primary"} size={"large"} icon={<PlayCircleOutlined/>}>Solve</Button>
            </div>
            <ScheduleTable timeslots={timeslots} classrooms={classrooms} lessons={lessons}/>
        </div>
    );
}

export default Timetable;