import timeslotConstants from "../constants/timeslotConstants";
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

const timeslotReducer = (state = defaultState, action) => {
    switch (action.type) {
        case timeslotConstants.GET_TIMESLOT_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case timeslotConstants.GET_TIMESLOT_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timeslotConstants.GET_TIMESLOT_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: {content: "Professor loaded", type: messageConstants.INFO}
                }
            };
        case timeslotConstants.GET_TIMESLOT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timeslotConstants.GET_TIMESLOT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timeslotConstants.GET_TIMESLOT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Timeslot loaded", type: messageConstants.INFO}
                }
            };
        case timeslotConstants.CREATE_TIMESLOT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timeslotConstants.CREATE_TIMESLOT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timeslotConstants.CREATE_TIMESLOT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Timeslot created", type: messageConstants.SUCCESS}
                }
            };
        case timeslotConstants.UPDATE_TIMESLOT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timeslotConstants.UPDATE_TIMESLOT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timeslotConstants.UPDATE_TIMESLOT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: {content: "Timeslot updated", type: messageConstants.SUCCESS}
                }
            };
        case timeslotConstants.DELETE_TIMESLOT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case timeslotConstants.DELETE_TIMESLOT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: {content: action.payload, type: messageConstants.FAIL}
                }
            };
        case timeslotConstants.DELETE_TIMESLOT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: {},
                    message: {content: "Timeslot deleted", type: messageConstants.SUCCESS}
                }
            };
        default:
            return state;
    }
};

export default timeslotReducer;