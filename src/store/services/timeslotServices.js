import http from "../../config";

class TimeslotServices {

  getAllTimeslots() {
    return http.get("/timeslots");
  }
  
  getTimeslotById(id) {
    return http.get(`/timeslots/${id}`);
  }

  createTimeslot(data) {
    return http.post(`/timeslots`, data);
  }

  updateTimeslot(id, data) {
    return http.put(`/timeslots/${id}`, data);
  }

  deleteTimeslot(id) {
    return http.delete(`/timeslots/${id}`);
  }
}

const timeslotServices = new TimeslotServices();
export default timeslotServices;