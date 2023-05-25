import {combineReducers} from "redux";

import lessonReducer from "./store/reducers/lessonReducer";
import roomReducer from "./store/reducers/roomReducer";
import timeslotReducer from "./store/reducers/timeslotReducer";
import timetableReducer from "./store/reducers/timetableReducer";

const rootReducer = combineReducers({
    lesson: lessonReducer,
    room: roomReducer,
    timeslot: timeslotReducer,
    timetable: timetableReducer,
});

export default rootReducer;