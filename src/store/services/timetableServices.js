import http from "../../config";

class TimetableServices {

  getAllTimetables() {
    return http.get("/timetables");
  }
  
  getTimetableById(id) {
    return http.get(`/timetables/${id}`);
  }

  createTimetable(data) {
    return http.post(`/timetables`, data);
  }

  updateTimetable(id, data) {
    return http.put(`/timetables/${id}`, data);
  }

  deleteTimetable(id) {
    return http.delete(`/timetables/${id}`);
  }

  solveTimetable() {
    return http.post(`/timetables/solve`);
  }

  stopSolving() {
    return http.post(`/timetables/stop`);
  }
}

const timetableServices = new TimetableServices();
export default timetableServices;