import { ClassroomResource } from './ClassroomResource';
import { ClassroomType } from './ClassroomType';
import { Timeslot } from './Timeslot';

export interface Classroom {
    id: number;
    name: string;
    abbreviation: string;
    classroomType: ClassroomType;
    unavailability: Timeslot[];
    classroomResources: ClassroomResource[];
}
