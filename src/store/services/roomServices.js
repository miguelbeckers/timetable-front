import http from "../../config";

class RoomServices {

  getAllRooms() {
    return http.get("/rooms");
  }
  
  getRoomById(id) {
    return http.get(`/rooms/${id}`);
  }

  createRoom(data) {
    return http.post(`/rooms`, data);
  }

  updateRoom(id, data) {
    return http.put(`/rooms/${id}`, data);
  }

  deleteRoom(id) {
    return http.delete(`/rooms/${id}`);
  }
}

const roomServices = new RoomServices();
export default roomServices;