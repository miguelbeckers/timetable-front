import timetableConstants from "../constants/timetableConstants";
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

const timetableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case timetableConstants.GET_TIMETABLE_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case timetableConstants.GET_TIMETABLE_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timetableConstants.GET_TIMETABLE_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: {content: "Timetables loaded", type: messageConstants.INFO}
                }
            };
        case timetableConstants.GET_TIMETABLE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timetableConstants.GET_TIMETABLE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timetableConstants.GET_TIMETABLE_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Timetable loaded", type: messageConstants.INFO}
                }
            };
        case timetableConstants.CREATE_TIMETABLE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timetableConstants.CREATE_TIMETABLE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timetableConstants.CREATE_TIMETABLE_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Timetable created", type: messageConstants.SUCCESS}
                }
            };
        case timetableConstants.UPDATE_TIMETABLE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timetableConstants.UPDATE_TIMETABLE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timetableConstants.UPDATE_TIMETABLE_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Timetable updated", type: messageConstants.SUCCESS}
                }
            };
        case timetableConstants.DELETE_TIMETABLE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timetableConstants.DELETE_TIMETABLE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timetableConstants.DELETE_TIMETABLE_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: {},
                    message: {content: "Timetable deleted", type: messageConstants.SUCCESS}
                }
            };
        default:
            return state;
    }
};

export default timetableReducer;