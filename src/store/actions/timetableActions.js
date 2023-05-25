import timetableServices from "../services/timetableServices";
import timetableConstants from "../constants/timetableConstants";

export const getAll = () => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.GET_TIMETABLE_LIST_LOADING
        });

        const res = await timetableServices.getAll();

        dispatch({
            type: timetableConstants.GET_TIMETABLE_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timetableConstants.GET_TIMETABLE_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getById = (id) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.GET_TIMETABLE_LOADING
        });

        const res = await timetableServices.getById(id);

        dispatch({
            type: timetableConstants.GET_TIMETABLE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timetableConstants.GET_TIMETABLE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const create = (data) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.CREATE_TIMETABLE_LOADING
        });

        const res = await timetableServices.create(data);

        dispatch({
            type: timetableConstants.CREATE_TIMETABLE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timetableConstants.CREATE_TIMETABLE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const update = (id, data) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.UPDATE_TIMETABLE_LOADING
        });

        const res = await timetableServices.update(id, data);

        dispatch({
            type: timetableConstants.UPDATE_TIMETABLE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timetableConstants.UPDATE_TIMETABLE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const _delete = (id) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.DELETE_TIMETABLE_LOADING
        });

        const res = await timetableServices.delete(id);

        dispatch({
            type: timetableConstants.DELETE_TIMETABLE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timetableConstants.DELETE_TIMETABLE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};