import { SubjectCourse } from './SubjectCourse';
import { SubjectType } from './SubjectType';
import { LessonResource } from './LessonResource';
import { Professor } from './Professor';
import { Student } from './Student';

export interface Lesson {
    id: number;
    name: string;
    color: string;
    hoursPerWeek: number;
    blocks: number;
    subjectCourse: SubjectCourse;
    subjectType: SubjectType;
    lessonResources: LessonResource[];
    professors: Professor[];
    students: Student[];
}
