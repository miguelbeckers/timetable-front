import roomServices from "../services/roomServices";
import roomConstants from "../constants/roomConstants";

export const getAllRooms = () => async dispatch => {
    try {
        dispatch({
            type: roomConstants.GET_ROOM_LIST_LOADING
        });

        const res = await roomServices.getAllRooms();

        dispatch({
            type: roomConstants.GET_ROOM_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: roomConstants.GET_ROOM_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getRoomById = (id) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.GET_ROOM_LOADING
        });

        const res = await roomServices.getRoomById(id);

        dispatch({
            type: roomConstants.GET_ROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: roomConstants.GET_ROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const createRoom = (data) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.CREATE_ROOM_LOADING
        });

        const res = await roomServices.createRoom(data);

        dispatch({
            type: roomConstants.CREATE_ROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: roomConstants.CREATE_ROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const updateRoom = (id, data) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.UPDATE_ROOM_LOADING
        });

        const res = await roomServices.updateRoom(id, data);

        dispatch({
            type: roomConstants.UPDATE_ROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: roomConstants.UPDATE_ROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const deleteRoom = (id) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.DELETE_ROOM_LOADING
        });

        const res = await roomServices.deleteRoom(id);

        dispatch({
            type: roomConstants.DELETE_ROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: roomConstants.DELETE_ROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};