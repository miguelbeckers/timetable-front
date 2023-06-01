import React from 'react';
import {Card} from 'antd';

const LessonCard = ({id, subject, teacher, studentGroup, color}) => {
    return (
        <Card
            size="small"
            title={subject}
            headStyle={{backgroundColor: color, borderColor: color}}
            style={{width: 200}}
            hoverable
            extra={id}>
            <span>Teacher: {teacher}</span>
            <br/>
            <span>Group: {studentGroup}</span>
        </Card>
    );
};

export default LessonCard;
