import lessonServices from "../services/lessonServices";
import lessonConstants from "../constants/lessonConstants";

export const getAllLessons = () => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.GET_LESSON_LIST_LOADING
        });

        const res = await lessonServices.getAllLessons();

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

export const getLessonById = (id) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.GET_LESSON_LOADING
        });

        const res = await lessonServices.getLessonById(id);

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

export const createLesson = (data) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.CREATE_LESSON_LOADING
        });

        const res = await lessonServices.createLesson(data);

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

export const updateLesson = (id, data) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.UPDATE_LESSON_LOADING
        });

        const res = await lessonServices.updateLesson(id, data);

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

export const deleteLesson = (id) => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.DELETE_LESSON_LOADING
        });

        const res = await lessonServices.deleteLesson(id);

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

export const resetLessons = () => async dispatch => {
    try {
        dispatch({
            type: lessonConstants.RESET_LESSON_LOADING
        });

        const res = await lessonServices.resetLesson();

        dispatch({
            type: lessonConstants.RESET_LESSON_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: lessonConstants.RESET_LESSON_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};