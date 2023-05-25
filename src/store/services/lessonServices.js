import http from "../../config";

class LessonServices {

  getAllLessons() {
    return http.get("/lessons");
  }
  
  getLessonById(id) {
    return http.get(`/lessons/${id}`);
  }

  createLesson(data) {
    return http.post(`/lessons`, data);
  }

  updateLesson(id, data) {
    return http.put(`/lessons/${id}`, data);
  }

  deleteLesson(id) {
    return http.delete(`/lessons/${id}`);
  }
}

const lessonServices = new LessonServices();
export default lessonServices;