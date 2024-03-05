import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ClassroomDto} from "../../types/dtos/ClassroomDto.ts";

type ClassroomState = {
    entities: Array<ClassroomDto>,
    loading: boolean,
}

const classroomSlice = createSlice({
    name: 'classrooms',
    initialState: {
        entities: [],
        loading: false,
    } as ClassroomState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setClassrooms: (state, action: PayloadAction<Array<ClassroomDto>>) => {
            state.entities = action.payload
        },
        addClassroom: (state, action: PayloadAction<ClassroomDto>) => {
            state.entities.push(action.payload)
        },
        updateClassroom: (state, action: PayloadAction<ClassroomDto>) => {
            const index = state.entities.findIndex(classroom => classroom.id === action.payload.id)
            state.entities[index] = action.payload
        }
    }
})

export const classroomsActions = classroomSlice.actions
export const classroomsReducer = classroomSlice.reducer
