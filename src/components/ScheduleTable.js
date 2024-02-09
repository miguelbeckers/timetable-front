import React from 'react';
import {Table} from 'antd';
import LessonCard from './LessonCard';

import "./ScheduleTable.css"

const ScheduleTable = ({timeslots, classrooms, lessons}) => {
    const columns = [
        {
            title: 'Time Slot',
            dataIndex: 'timeslot',
            key: 'timeslot',
        },
        ...classrooms.map((classroom) => ({
            title: classroom.name,
            dataIndex: classroom.id.toString(),
            key: `${classroom.id}_${timeslots.map((timeslot) => timeslot.id).join("_")}`,
            render: (lessons) => {
                return <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    {lessons.map(unit => (
                        <LessonCard
                            key={unit.id}
                            id={unit.id}
                            subject={unit.subject}
                            professor={unit.professor ? unit.professor.name : "undefined"}
                            studentGroup={unit.studentGroup}
                            color={unit.lesson.color}
                        />
                    ))}
                </div>
            }
        })),
    ];

    const data = timeslots.map((timeslot) => {
        const rowData = {
            key: timeslot.id.toString(),
            timeslot: `${timeslot.dayOfWeek} ${timeslot.startTime.slice(0, -3)}-${timeslot.endTime.slice(0, -3)}`,
        };

        classrooms.forEach((classroom) => {
            rowData[classroom.id.toString()] = lessons.filter(
                (lesson) => lesson.timeslot?.id === timeslot.id && lesson.classroom?.id === classroom.id
            );
        });

        return rowData;
    });

    return <div className={"scheduleTable"}>
        <Table dataSource={data} columns={columns} pagination={false}/>
        <div className={"notAssigned"}>
            {lessons.map(lesson => !lesson.classroom ? <LessonCard
                key={lesson.id}
                id={lesson.id}
                subject={lesson.subject}
                professor={lesson.professor}
                studentGroup={lesson.studentGroup}
                color={lesson.lesson.color}
            /> : null)}
        </div>
    </div>;
};

export default ScheduleTable;
