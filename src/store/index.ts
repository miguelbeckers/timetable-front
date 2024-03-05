import {configureStore} from '@reduxjs/toolkit'
import {classroomsReducer} from "./slices/classroomSlice.ts";

const store = configureStore({
    reducer: {
        classrooms: classroomsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
