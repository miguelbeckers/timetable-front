import lessonServices from "../services/lessonServices";
import lessonConstants from "../constants/lessonConstants";

export const getAll = () => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.GET_LESSON_LIST_LOADING
        });

        const res = await lessonServices.getAll();

        dispatch({
            type: lessonConstants.GET_LESSON_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: lessonConstants.GET_LESSON_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getById = (id) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.GET_LESSON_LOADING
        });

        const res = await lessonServices.getById(id);

        dispatch({
            type: lessonConstants.GET_LESSON_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: lessonConstants.GET_LESSON_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const create = (data) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.CREATE_LESSON_LOADING
        });

        const res = await lessonServices.create(data);

        dispatch({
            type: lessonConstants.CREATE_LESSON_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: lessonConstants.CREATE_LESSON_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const update = (id, data) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.UPDATE_LESSON_LOADING
        });

        const res = await lessonServices.update(id, data);

        dispatch({
            type: lessonConstants.UPDATE_LESSON_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: lessonConstants.UPDATE_LESSON_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const _delete = (id) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.DELETE_LESSON_LOADING
        });

        const res = await lessonServices.delete(id);

        dispatch({
            type: lessonConstants.DELETE_LESSON_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: lessonConstants.DELETE_LESSON_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};