export interface Course {
    id: number;
    name: string;
    abbreviation: string;
    departmentId: number;
    unavailabilityIds: number[];
    periodIds: number[];
}
