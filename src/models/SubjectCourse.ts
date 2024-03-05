import { Course } from './Course';
import { Subject } from './Subject';
import { Period } from './Period';

export interface SubjectCourse {
    id: number;
    course: Course;
    subject: Subject;
    period: Period;
}
