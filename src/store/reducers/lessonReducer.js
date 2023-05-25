import lessonConstants from "../constants/lessonConstants";
import messageConstants from "../../common/messageConstants";

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

const lessonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case lessonConstants.GET_LESSON_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case lessonConstants.GET_LESSON_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case lessonConstants.GET_LESSON_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: { content: "Lessons loaded", type: messageConstants.INFO }
                }
            };
        case lessonConstants.GET_LESSON_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case lessonConstants.GET_LESSON_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case lessonConstants.GET_LESSON_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "Lesson loaded", type: messageConstants.INFO }
                }
            };
        case lessonConstants.CREATE_LESSON_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case lessonConstants.CREATE_LESSON_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case lessonConstants.CREATE_LESSON_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "Lesson created", type: messageConstants.SUCCESS }
                }
            };
        case lessonConstants.UPDATE_LESSON_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case lessonConstants.UPDATE_LESSON_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case lessonConstants.UPDATE_LESSON_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "Lesson updated", type: messageConstants.SUCCESS }
                }
            };
        case lessonConstants.DELETE_LESSON_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case lessonConstants.DELETE_LESSON_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case lessonConstants.DELETE_LESSON_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: {},
                    message: { content: "Lesson deleted", type: messageConstants.SUCCESS }
                }
            };
        default:
            return state;
    }
};

export default lessonReducer;