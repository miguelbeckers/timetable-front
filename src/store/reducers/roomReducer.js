import roomConstants from "../constants/roomConstants";
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

const roomReducer = (state = defaultState, action) => {
    switch (action.type) {
        case roomConstants.GET_ROOM_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case roomConstants.GET_ROOM_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case roomConstants.GET_ROOM_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: { content: "Rooms loaded", type: messageConstants.INFO }
                }
            };
        case roomConstants.GET_ROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case roomConstants.GET_ROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case roomConstants.GET_ROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "Room loaded", type: messageConstants.INFO }
                }
            };
        case roomConstants.CREATE_ROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case roomConstants.CREATE_ROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case roomConstants.CREATE_ROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "Room created", type: messageConstants.SUCCESS }
                }
            };
        case roomConstants.UPDATE_ROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case roomConstants.UPDATE_ROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case roomConstants.UPDATE_ROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "Room updated", type: messageConstants.SUCCESS }
                }
            };
        case roomConstants.DELETE_ROOM_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case roomConstants.DELETE_ROOM_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstants.FAIL }
                }
            };
        case roomConstants.DELETE_ROOM_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: {},
                    message: { content: "Room deleted", type: messageConstants.SUCCESS }
                }
            };
        default:
            return state;
    }
};

export default roomReducer;