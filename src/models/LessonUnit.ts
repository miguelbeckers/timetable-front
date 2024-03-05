import {Lesson} from "./Lesson";
import {Timeslot} from "./Timeslot";
import {Classroom} from "./Classroom";

export interface LessonUnit {
    id: number;
    lesson: Lesson;
    timeslot: Timeslot;
    classroom: Classroom;
}
