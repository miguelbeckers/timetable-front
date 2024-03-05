import classroomServices from "../services/classroomServices";
import classroomConstants from "../constants/classroomConstants";

export const getAllClassrooms = () => async dispatch => {
    try {
        dispatch({
            type: classroomConstants.GET_CLASSROOM_LIST_LOADING
        });

        const res = await classroomServices.getAllClassrooms();

        dispatch({
            type: classroomConstants.GET_CLASSROOM_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: classroomConstants.GET_CLASSROOM_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getClassroomById = (id) => async dispatch => {
    try {
        dispatch({
            type: classroomConstants.GET_CLASSROOM_LOADING
        });

        const res = await classroomServices.getClassroomById(id);

        dispatch({
            type: classroomConstants.GET_CLASSROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: classroomConstants.GET_CLASSROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const createClassroom = (data) => async dispatch => {
    try {
        dispatch({
            type: classroomConstants.CREATE_CLASSROOM_LOADING
        });

        const res = await classroomServices.createClassroom(data);

        dispatch({
            type: classroomConstants.CREATE_CLASSROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: classroomConstants.CREATE_CLASSROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const updateClassroom = (id, data) => async dispatch => {
    try {
        dispatch({
            type: classroomConstants.UPDATE_CLASSROOM_LOADING
        });

        const res = await classroomServices.updateClassroom(id, data);

        dispatch({
            type: classroomConstants.UPDATE_CLASSROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: classroomConstants.UPDATE_CLASSROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const deleteClassroom = (id) => async dispatch => {
    try {
        dispatch({
            type: classroomConstants.DELETE_CLASSROOM_LOADING
        });

        const res = await classroomServices.deleteClassroom(id);

        dispatch({
            type: classroomConstants.DELETE_CLASSROOM_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: classroomConstants.DELETE_CLASSROOM_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};