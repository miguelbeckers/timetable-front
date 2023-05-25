import http from "../../config";

class LessonServices {

  hello() {
    return http.get("/lessons/hello");
  }

  getAll() {
    return http.get("/lessons");
  }
  
  getById(id) {
    return http.get(`/lessons/${id}`);
  }

  create(data) {
    return http.post(`/lessons`, data);
  }

  update(id, data) {
    return http.put(`/lessons/${id}`, data);
  }

  delete(id) {
    return http.delete(`/lessons/${id}`);
  }
}

export default new LessonServices();