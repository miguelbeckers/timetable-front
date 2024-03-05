import {combineReducers} from "redux";

import lessonReducers from "./reducers/lessonReducers";
import classroomReducers from "./reducers/classroomReducers";
import timeslotReducers from "./reducers/timeslotReducers";
import timetableReducers from "./reducers/timetableReducers";

const rootReducer = combineReducers({
    lesson: lessonReducers,
    classroom: classroomReducers,
    timeslot: timeslotReducers,
    timetable: timetableReducers,
});

export default rootReducer;