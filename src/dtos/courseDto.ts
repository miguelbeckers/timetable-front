interface CourseDto {
    id: number;
    name: string;
    abbreviation: string;
    departmentId: number;
    unavailabilityIds: number[];
    periodIds: number[];
}
