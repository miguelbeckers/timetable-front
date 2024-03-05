import {combineReducers} from "redux";

import classroomReducers from "./reducers/classroomReducers";

const rootReducer = combineReducers({
    lesson: [],
    classroom: classroomReducers,
    timeslot: [],
    timetable: [],
});

export default rootReducer;