import {Department} from "./Department";
import {Timeslot} from "./Timeslot";

export interface Professor {
    id: number;
    name: string;
    abbreviation: string;
    department: Department;
    unavailability: Timeslot[];
}
