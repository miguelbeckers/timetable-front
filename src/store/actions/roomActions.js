import roomServices from "../services/roomServices";
import roomConstants from "../constants/roomConstants";

export const getAll = () => async dispatch => {
    try {
        dispatch({
            type: roomConstants.GET_ROOM_LIST_LOADING
        });

        const res = await roomServices.getAll();

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

export const getById = (id) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.GET_ROOM_LOADING
        });

        const res = await roomServices.getById(id);

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

export const create = (data) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.CREATE_ROOM_LOADING
        });

        const res = await roomServices.create(data);

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

export const update = (id, data) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.UPDATE_ROOM_LOADING
        });

        const res = await roomServices.update(id, data);

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

export const _delete = (id) => async dispatch => {
    try {
        dispatch({
            type: roomConstants.DELETE_ROOM_LOADING
        });

        const res = await roomServices.delete(id);

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