import http from "../../config";

class TimeslotServices {

  hello() {
    return http.get("/timeslots/hello");
  }

  getAll() {
    return http.get("/timeslots");
  }
  
  getById(id) {
    return http.get(`/timeslots/${id}`);
  }

  create(data) {
    return http.post(`/timeslots`, data);
  }

  update(id, data) {
    return http.put(`/timeslots/${id}`, data);
  }

  delete(id) {
    return http.delete(`/timeslots/${id}`);
  }
}

export default new TimeslotServices();