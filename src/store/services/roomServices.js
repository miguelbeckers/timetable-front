import http from "../../config";

class RoomServices {

  hello() {
    return http.get("/rooms/hello");
  }

  getAll() {
    return http.get("/rooms");
  }
  
  getById(id) {
    return http.get(`/rooms/${id}`);
  }

  create(data) {
    return http.post(`/rooms`, data);
  }

  update(id, data) {
    return http.put(`/rooms/${id}`, data);
  }

  delete(id) {
    return http.delete(`/rooms/${id}`);
  }
}

export default new RoomServices();