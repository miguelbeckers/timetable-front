import React, {useEffect} from 'react';
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {getAllClassrooms} from "../store/thunks/classroomThunks.ts";

const Hello: React.FC = () => {
    const dispatch = useAppDispatch();
    const classrooms = useAppSelector(s => s.classrooms.entities)

    useEffect(() => {
        dispatch(getAllClassrooms())
    }, [dispatch])

    function onButtonClicked() {
        dispatch(getAllClassrooms())
    }

    return <div>
        {classrooms.map(c => <div key={c.id}>{c.abbreviation}</div>)}
    </div>;
};

export default Hello;
