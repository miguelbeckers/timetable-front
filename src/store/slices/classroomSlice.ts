import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ClassroomDto} from "../../types/dtos/ClassroomDto.ts";

type ClassroomState = {
    entities: Array<ClassroomDto>,
    current: ClassroomDto | null,
    loading: boolean,
}

const classroomSlice = createSlice({
    name: 'classrooms',
    initialState: {
        entities: [],
        current: null,
        loading: false,
    } as ClassroomState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setCurrentClassroom: (state, action: PayloadAction<ClassroomDto>) => {
            state.current = action.payload
        },
        setClassrooms: (state, action: PayloadAction<Array<ClassroomDto>>) => {
            state.entities = action.payload
        },
        saveClassroom: (state, action: PayloadAction<ClassroomDto>) => {
            const index = state.entities.findIndex(classroom => classroom.id === action.payload.id)
            index === -1 ? state.entities.push(action.payload) : state.entities[index] = action.payload
        },
        removeClassroom: (state, action: PayloadAction<number>) => {
            state.entities = state.entities.filter(classroom => classroom.id !== action.payload)
        }
    }
})

export const classroomsActions = classroomSlice.actions
export const classroomsReducer = classroomSlice.reducer
