import classroomConstants from "../constants/classroomConstants";
import messageConstants from "../constants/messageConstants";

const defaultState = {
    current: {
        loading: false,
        data: {},
        message: {}
    },
    list: {
        loading: false,
        data: [],
        message: {}
    }
};

const classroomReducer = (state = defaultState, action) => {
    switch (action.type) {
        case classroomConstants.GET_CLASSROOM_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case classroomConstants.GET_CLASSROOM_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case classroomConstants.GET_CLASSROOM_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: {content: "Classrooms loaded", type: messageConstants.INFO}
                }
            };
        case classroomConstants.GET_CLASSROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case classroomConstants.GET_CLASSROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case classroomConstants.GET_CLASSROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Classrooms loaded", type: messageConstants.INFO}
                }
            };
        case classroomConstants.CREATE_CLASSROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case classroomConstants.CREATE_CLASSROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case classroomConstants.CREATE_CLASSROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Classrooms created", type: messageConstants.SUCCESS}
                }
            };
        case classroomConstants.UPDATE_CLASSROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case classroomConstants.UPDATE_CLASSROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case classroomConstants.UPDATE_CLASSROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Classrooms updated", type: messageConstants.SUCCESS}
                }
            };
        case classroomConstants.DELETE_CLASSROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case classroomConstants.DELETE_CLASSROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case classroomConstants.DELETE_CLASSROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: {},
                    message: {content: "Classrooms deleted", type: messageConstants.SUCCESS}
                }
            };
        default:
            return state;
    }
};

export default classroomReducer;