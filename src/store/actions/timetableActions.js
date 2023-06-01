import timetableServices from "../services/timetableServices";
import timetableConstants from "../constants/timetableConstants";

export const getAllTimetables = () => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.GET_TIMETABLE_LIST_LOADING
        });

        const res = await timetableServices.getAllTimetables();

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

export const getTimetableById = (id) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.GET_TIMETABLE_LOADING
        });

        const res = await timetableServices.getTimetableById(id);

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

export const createTimetable = (data) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.CREATE_TIMETABLE_LOADING
        });

        const res = await timetableServices.createTimetable(data);

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

export const updateTimetable = (id, data) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.UPDATE_TIMETABLE_LOADING
        });

        const res = await timetableServices.updateTimetable(id, data);

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

export const deleteTimetable = (id) => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.DELETE_TIMETABLE_LOADING
        });

        const res = await timetableServices.deleteTimetable(id);

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

export const solveTimetable = () => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.SOLVE_TIMETABLE_LOADING
        });

        const res = await timetableServices.solveTimetable();

        dispatch({
            type: timetableConstants.SOLVE_TIMETABLE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timetableConstants.SOLVE_TIMETABLE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const stopSolving = () => async dispatch => {
    try {
        dispatch({
            type: timetableConstants.STOP_TIMETABLE_LOADING
        });

        const res = await timetableServices.stopSolving();

        dispatch({
            type: timetableConstants.STOP_TIMETABLE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: timetableConstants.STOP_TIMETABLE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};