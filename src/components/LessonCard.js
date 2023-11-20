import React from 'react';
import {Card} from 'antd';

const LessonCard = ({id, subject, professor, studentGroup, color}) => {
    return (
        <Card
            size="small"
            title={subject}
            headStyle={{backgroundColor: color, borderColor: color}}
            style={{width: 200}}
            hoverable
            extra={id}>
            <span>Professor: {professor}</span>
            <br/>
            <span>Group: {studentGroup}</span>
        </Card>
    );
};

export default LessonCard;
