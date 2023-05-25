import timeslotServices from "../services/timeslotServices";
import timeslotConstants from "../constants/timeslotConstants";

export const getAllTimeslots = () => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.GET_TIMESLOT_LIST_LOADING
        });

        const res = await timeslotServices.getAllTimeslots();

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

export const getTimeslotById = (id) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.GET_TIMESLOT_LOADING
        });

        const res = await timeslotServices.getTimeslotById(id);

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

export const createTimeslot = (data) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.CREATE_TIMESLOT_LOADING
        });

        const res = await timeslotServices.createTimeslot(data);

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

export const updateTimeslot = (id, data) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.UPDATE_TIMESLOT_LOADING
        });

        const res = await timeslotServices.updateTimeslot(id, data);

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

export const deleteTimeslot = (id) => async dispatch => {
    try {
        dispatch({
            type: timeslotConstants.DELETE_TIMESLOT_LOADING
        });

        const res = await timeslotServices.deleteTimeslot(id);

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