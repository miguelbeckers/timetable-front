import http from "../config";
import {AxiosResponse} from "axios";
import {ClassroomDto} from "../types/dtos/ClassroomDto";

class ClassroomServices {
    getAllClassrooms(): Promise<AxiosResponse<ClassroomDto[]>> {
        return http.get("/classrooms");
    }

    getClassroomById(id: number): Promise<AxiosResponse<ClassroomDto>> {
        return http.get(`/classrooms/${id}`);
    }

    createClassroom(data: ClassroomDto): Promise<AxiosResponse<ClassroomDto>> {
        return http.post(`/classrooms`, data);
    }

    updateClassroom(id: number, data: ClassroomDto): Promise<AxiosResponse<ClassroomDto>> {
        return http.put(`/classrooms/${id}`, data);
    }

    deleteClassroom(id: number): Promise<AxiosResponse<ClassroomDto>> {
        return http.delete(`/classrooms/${id}`);
    }
}

const classroomServices = new ClassroomServices();
export default classroomServices;
