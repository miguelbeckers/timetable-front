export interface Classroom {
    id: number;
    name: string;
    abbreviation: string;
    unavailabilityIds: number[];
    classroomResourceIds: number[];
    classroomTypeId: number | null;
}
