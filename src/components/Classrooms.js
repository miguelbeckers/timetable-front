import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllLessons, resetLessons} from "../actions/lessonActions";
import {getAllClassrooms} from "../actions/classroomActions";
import {getAllTimeslots} from "../actions/timeslotActions";
import {solveTimetable, stopSolving} from "../actions/timetableActions";

import {Button, Descriptions} from "antd";
import {UndoOutlined, PlayCircleOutlined, StopOutlined} from "@ant-design/icons";

import ScheduleTable from "./ScheduleTable";
import "./Classrooms.css";

function Classrooms() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLessons());
        dispatch(getAllClassrooms());
        dispatch(getAllTimeslots());
    }, [dispatch]);

    const lessons = useSelector(state => state.lesson.list.data);
    const classrooms = useSelector(state => state.classroom.list.data);
    const timeslots = useSelector(state => state.timeslot.list.data);
    const timetable = useSelector(state => state.timetable.current);

    const solve = () => {
        dispatch(solveTimetable());
    };

    const stop = () => {
        dispatch(stopSolving());
    };

    const reset = () => {
        dispatch(resetLessons());
    };

    return (<div className={"timetable"}>
        <div className={"info"}>
            <Descriptions bordered={true} column={1} size={"small"}>
                <Descriptions.Item label={"Score"}>{timetable.data.score ?? "undefined"}</Descriptions.Item>
            </Descriptions>

            <div className={"buttons"}>
                <Button
                    size={"large"}
                    icon={<UndoOutlined/>}
                    onClick={reset}>Reset
                </Button>
                <Button
                    type={"primary"}
                    size={"large"}
                    icon={<PlayCircleOutlined/>}
                    loading={timetable.loading}
                    onClick={solve}>
                    Solve
                </Button>
                {timetable.loading ? <Button
                    type={"primary"}
                    size={"large"}
                    danger={true}
                    icon={<StopOutlined/>}
                    onClick={stop}>
                    Stop
                </Button> : null}
            </div>
        </div>
        <ScheduleTable timeslots={timeslots} classrooms={classrooms} lessons={lessons}/>
    </div>);
}

export default Classrooms;