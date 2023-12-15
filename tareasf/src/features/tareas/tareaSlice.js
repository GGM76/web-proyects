import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tareaService from "./tareaService";

const initialState = {
    tareas: [],
    isError : false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//crear nueva tarea 
export const crearTarea = createAsyncThunk('tareas/crear', async (tareaData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.crearTarea(tareaData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWihtValue(message)
    }
})

//Obtener las tareas del usuario 
export const getTareas = createAsyncThunk('taeras/getTareas', async (_,thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.getTareas(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWihtValue(message)
    }
})

//borrar tarea 
export const deleteTarea = createAsyncThunk('tareas/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.deleteTarea(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWihtValue(message)
    }
})
export const tareaSlice = createSlice({
    name: 'tarea',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(crearTarea.pending, (state) =>{
                state.isLoading= true
            })
            .addCase(crearTarea.fulfilled, (state) =>{
                state.isLoading= false
                state.isSucces= true
                state.tareas.push(action.payload)
            })
            .addCase(crearTarea.rejected, (state,action) =>{
                state.isLoading= false
                state.isError= true
                state.message = action.payload
            })
            .addCase(getTareas.pending, (state) =>{
                state.isLoading= true
            })
            .addCase(getTareas.fulfilled, (state) =>{
                state.isLoading= false
                state.isSucces= true
                state.mistareas= action.payload
            })
            .addCase(getTareas.rejected, (state,action) =>{
                state.isLoading= false
                state.isError= true
                state.message = action.payload
            })
    }
})




export const {reset} = tareaSlice.action

export default tareaSlice.reducer