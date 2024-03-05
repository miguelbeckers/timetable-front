import { Department } from './Department';
import { Period } from './Period';
import { Timeslot } from './Timeslot';

export interface Course {
    id: number;
    name: string;
    abbreviation: string;
    department: Department;
    unavailability: Timeslot[];
    periods: Period[];
}
