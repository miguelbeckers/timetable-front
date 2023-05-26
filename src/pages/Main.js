import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Table} from "antd";

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

    const columns = room.list.data.map((r) => {
        return {
            title: r.name.toUpperCase(),
            dataIndex: r.name,
            key: r.id,
        }
    });

    const timeslotColumn = {
        title: "TIMESLOT",
        dataIndex: "timeslot",
        key: -1,
        render: ({ dayOfWeek, startTime }) => `${dayOfWeek} ${startTime.toString().slice(0, -3)}`
    };

    columns.unshift(timeslotColumn);

    const dataSource = timeslot.list.data.map(t => {
        const row = {};
        columns.forEach(column => {
            row[column.dataIndex] = undefined;
        });
        row.timeslot = t;
        return row;
    });

    return (<>
        <Table dataSource={dataSource} columns={columns} />
    </>);
}

export default Main;