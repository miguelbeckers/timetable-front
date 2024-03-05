import {createAsyncThunk} from "@reduxjs/toolkit";
import classroomServices from "../services/classroomServices.ts";
import {classroomsActions} from "../slices/classroomSlice.ts";
import {ClassroomDto} from "../../types/dtos/ClassroomDto.ts";

export const getAllClassrooms = createAsyncThunk(
    'classroom/getAll',
    async (_: void, {dispatch, rejectWithValue}) => {
        try {
            const classrooms = await classroomServices.getAllClassrooms()
            dispatch(classroomsActions.setClassrooms(classrooms.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const createClassroom = createAsyncThunk(
    'classroom/create',
    async (classroom: ClassroomDto, {dispatch, rejectWithValue}) => {
        try {
            const newClassroom = await classroomServices.createClassroom(classroom)
            dispatch(classroomsActions.addClassroom(newClassroom.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const updateClassroom = createAsyncThunk(
    'classroom/update',
    async (classroom: ClassroomDto, {dispatch, rejectWithValue}) => {
        try {
            const updatedClassroom = await classroomServices.updateClassroom(classroom.id, classroom)
            dispatch(classroomsActions.updateClassroom(updatedClassroom.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
