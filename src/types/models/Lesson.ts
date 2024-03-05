export interface Lesson {
    id: number;
    name: string;
    color: string;
    hoursPerWeek: number;
    blocks: number;
    subjectCourseId: number;
    subjectTypeId: number;
    professorIds: number[];
    lessonResourceIds: number[];
    studentIds: number[];
}
