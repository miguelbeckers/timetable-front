import http from "../../config";

class TimetableServices {

  hello() {
    return http.get("/timetables/hello");
  }

  getAll() {
    return http.get("/timetables");
  }
  
  getById(id) {
    return http.get(`/timetables/${id}`);
  }

  create(data) {
    return http.post(`/timetables`, data);
  }

  update(id, data) {
    return http.put(`/timetables/${id}`, data);
  }

  delete(id) {
    return http.delete(`/timetables/${id}`);
  }
}

export default new TimetableServices();