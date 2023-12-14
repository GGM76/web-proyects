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
            .addCase(crearTarea.pending, (state) =>{
                state.isLoading= false
                state.isError= true
                state.message = action.payload
            })
    }
})




export const {reset} = tareaSlice.action

export default tareaSlice.reducer