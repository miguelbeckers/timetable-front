import {createAsyncThunk} from "@reduxjs/toolkit";
import classroomServices from "../services/classroomServices.ts";
import {classroomsActions} from "../slices/classroomSlice.ts";
import {ClassroomDto} from "../../types/dtos/ClassroomDto.ts";

export const getAllClassrooms = createAsyncThunk(
    'classroom/getAll',
    async (_: void, {dispatch, rejectWithValue}) => {
        try {
            dispatch(classroomsActions.setLoading(true))
            const classrooms = await classroomServices.getAllClassrooms()
            dispatch(classroomsActions.setClassrooms(classrooms.data))
        } catch (error) {
            rejectWithValue(error)
        } finally {
            dispatch(classroomsActions.setLoading(false))
        }
    }
)

export const getClassroomById = createAsyncThunk(
    'classroom/getById',
    async (id: number, {dispatch, rejectWithValue}) => {
        try {
            dispatch(classroomsActions.setLoading(true))
            const classroom = await classroomServices.getClassroomById(id)
            dispatch(classroomsActions.saveClassroom(classroom.data))
            dispatch(classroomsActions.setCurrentClassroom(classroom.data))
        } catch (error) {
            rejectWithValue(error)
        } finally {
            dispatch(classroomsActions.setLoading(false))
        }
    }
)

export const createClassroom = createAsyncThunk(
    'classroom/create',
    async (classroom: ClassroomDto, {dispatch, rejectWithValue}) => {
        try {
            dispatch(classroomsActions.setLoading(true))
            const newClassroom = await classroomServices.createClassroom(classroom)
            dispatch(classroomsActions.saveClassroom(newClassroom.data))
            dispatch(classroomsActions.setCurrentClassroom(newClassroom.data))
        } catch (error) {
            rejectWithValue(error)
        } finally {
            dispatch(classroomsActions.setLoading(false))
        }
    }
)

export const updateClassroom = createAsyncThunk(
    'classroom/update',
    async (classroom: ClassroomDto, {dispatch, rejectWithValue}) => {
        try {
            dispatch(classroomsActions.setLoading(true))
            const updatedClassroom = await classroomServices.updateClassroom(classroom.id, classroom)
            dispatch(classroomsActions.saveClassroom(updatedClassroom.data))
        } catch (error) {
            rejectWithValue(error)
        } finally {
            dispatch(classroomsActions.setLoading(false))
        }
    }
)

export const deleteClassroom = createAsyncThunk(
    'classroom/delete',
    async (id: number, {dispatch, rejectWithValue}) => {
        try {
            dispatch(classroomsActions.setLoading(true))
            await classroomServices.deleteClassroom(id)
            dispatch(classroomsActions.removeClassroom(id))
        } catch (error) {
            rejectWithValue(error)
        } finally {
            dispatch(classroomsActions.setLoading(false))
        }
    }
)
