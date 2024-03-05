import {combineReducers} from "redux";

import lessonReducer from "./reducers/lessonReducer";
import classroomReducer from "./reducers/classroomReducer";
import timeslotReducer from "./reducers/timeslotReducer";
import timetableReducer from "./reducers/timetableReducer";

const rootReducer = combineReducers({
    lesson: lessonReducer,
    classroom: classroomReducer,
    timeslot: timeslotReducer,
    timetable: timetableReducer,
});

export default rootReducer;