import http from "../config";

class LessonServices {

  getAllLessons() {
    return http.get("/lesson-units");
  }
  
  getLessonById(id) {
    return http.get(`/lesson-units/${id}`);
  }

  createLesson(data) {
    return http.post(`/lesson-units`, data);
  }

  updateLesson(id, data) {
    return http.put(`/lesson-units/${id}`, data);
  }

  deleteLesson(id) {
    return http.delete(`/lesson-units/${id}`);
  }

  resetLesson() {
    return http.put(`/lesson-units/reset`);
  }
}

const lessonServices = new LessonServices();
export default lessonServices;