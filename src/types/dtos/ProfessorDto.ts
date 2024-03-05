export interface ProfessorDto {
    id: number;
    name: string;
    abbreviation: string;
    departmentId: number;
    unavailabilityIds: number[];
}
