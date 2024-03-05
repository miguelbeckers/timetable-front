export interface ClassroomDto {
    id: number;
    name: string;
    abbreviation: string;
    unavailabilityIds: number[];
    classroomResourceIds: number[];
    classroomTypeId: number | null;
}
