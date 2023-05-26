import React from 'react';
import {Table} from 'antd';
import LessonTag from './LessonTag';
import randomColor from 'randomcolor';

import "./ScheduleTable.css"

const ScheduleTable = ({timeslots, classrooms, lessons}) => {
    const subjectColors = {};

    const columns = [
        {
            title: 'Time Slot',
            dataIndex: 'timeslot',
            key: 'timeslot',
        },
        ...classrooms.map((classroom) => ({
            title: classroom.name,
            dataIndex: classroom.id.toString(),
            key: classroom.id.toString(),
            render: (lesson) =>
                lesson ? (
                    <LessonTag
                        subject={lesson.subject}
                        teacher={lesson.teacher}
                        studentGroup={lesson.studentGroup}
                        color={subjectColors[lesson.subject]}
                    />
                ) : (
                    ''
                ),
        })),
    ];

    const data = timeslots.map((timeslot) => {
        const rowData = {
            key: timeslot.id.toString(),
            timeslot: `${timeslot.dayOfWeek} ${timeslot.startTime.slice(0, -3)}-${timeslot.endTime.slice(0, -3)}`,
        };

        classrooms.forEach((classroom) => {
            const lesson = lessons.find(
                (lesson) => lesson.timeslot?.id === timeslot.id && lesson.classroom?.id === classroom.id
            );

            rowData[classroom.id.toString()] = lesson;

            if (lesson && !subjectColors[lesson.subject]) {
                subjectColors[lesson.subject] = randomColor({luminosity: 'light'});
            }
        });

        return rowData;
    });

    return <div className={"scheduleTable"}>
        <Table dataSource={data} columns={columns} pagination={false}/>
        <div className={"notAssigned"}>
            {lessons.map(lesson => !lesson.classroom ? <LessonTag
                subject={lesson.subject}
                teacher={lesson.teacher}
                studentGroup={lesson.studentGroup}
                color={subjectColors[lesson.subject]}
            /> : <></>)}
        </div>
    </div>;
};

export default ScheduleTable;
