import http from "../../config";

class ClassroomServices {

  getAllClassrooms() {
    return http.get("/classrooms");
  }
  
  getClassroomById(id) {
    return http.get(`/classrooms/${id}`);
  }

  createClassroom(data) {
    return http.post(`/classrooms`, data);
  }

  updateClassroom(id, data) {
    return http.put(`/classrooms/${id}`, data);
  }

  deleteClassroom(id) {
    return http.delete(`/classrooms/${id}`);
  }
}

const classroomServices = new ClassroomServices();
export default classroomServices;