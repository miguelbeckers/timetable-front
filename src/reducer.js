import {combineReducers} from "redux";

import lessonReducer from "./store/reducers/lessonReducer";
import classroomReducer from "./store/reducers/classroomReducer";
import timeslotReducer from "./store/reducers/timeslotReducer";
import timetableReducer from "./store/reducers/timetableReducer";

const rootReducer = combineReducers({
    lesson: lessonReducer,
    classroom: classroomReducer,
    timeslot: timeslotReducer,
    timetable: timetableReducer,
});

export default rootReducer;