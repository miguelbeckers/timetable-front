import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Menu} from 'antd';
import type {MenuProps} from 'antd';
import {CalendarOutlined, CodepenOutlined, BookOutlined, ClockCircleOutlined} from '@ant-design/icons';

import "./Header.css"

const Header: React.FC = () => {
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            label: 'Timetable',
            key: 'timetable',
            icon: <CalendarOutlined/>,
        },
        {
            label: 'Classrooms',
            key: 'classrooms',
            icon: <CodepenOutlined/>,
        },
        {
            label: 'Lessons',
            key: 'lessons',
            icon: <BookOutlined/>,
        },
        {
            label: 'Timeslots',
            key: 'timeslots',
            icon: <ClockCircleOutlined/>,
        }
    ];

    const [current, setCurrent] = useState('timetable');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`/${e.key}`);
    };

    return <div className={"header"}>
        <div className={"title"}>
            <h1>ipb-timetable-optimizer</h1>
        </div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
    </div>;
};

export default Header;