import timeslotServices from "../services/timeslotServices";
import timeslotConstants from "../constants/timeslotConstants";

export const getAll = () => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.GET_TIMESLOT_LIST_LOADING
        });

        const res = await timeslotServices.getAll();

        dispatch({
            type: timeslotConstants.GET_TIMESLOT_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timeslotConstants.GET_TIMESLOT_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getById = (id) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.GET_TIMESLOT_LOADING
        });

        const res = await timeslotServices.getById(id);

        dispatch({
            type: timeslotConstants.GET_TIMESLOT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timeslotConstants.GET_TIMESLOT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const create = (data) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.CREATE_TIMESLOT_LOADING
        });

        const res = await timeslotServices.create(data);

        dispatch({
            type: timeslotConstants.CREATE_TIMESLOT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timeslotConstants.CREATE_TIMESLOT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const update = (id, data) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.UPDATE_TIMESLOT_LOADING
        });

        const res = await timeslotServices.update(id, data);

        dispatch({
            type: timeslotConstants.UPDATE_TIMESLOT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timeslotConstants.UPDATE_TIMESLOT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const _delete = (id) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.DELETE_TIMESLOT_LOADING
        });

        const res = await timeslotServices.delete(id);

        dispatch({
            type: timeslotConstants.DELETE_TIMESLOT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timeslotConstants.DELETE_TIMESLOT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};