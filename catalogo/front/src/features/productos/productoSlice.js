import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productoService from './productoService';

const initialState = {
    misproductos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//crear una nueva tarea
export const crearProducto = createAsyncThunk('productos/crear', async (productoData, thunkAPI) => {

    try {
        const admin = thunkAPI.getState().auth.user.admin
        if(admin){
        const token = thunkAPI.getState().auth.user.token
        return await productoService.crearProducto(productoData, token)}
    } catch (error) {
        const message = (error.reponse && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Obtener las tareas de usuario
export const getProductos = createAsyncThunk('productos/getProductos', async (_, thunkAPI) => {
    try {
        //const token = thunkAPI.getState().auth.user.token
        return await productoService.getProductos()//token)
    } catch (error) {
        const message = (error.reponse && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Obtener un producto
export const getOneProducto = createAsyncThunk('productos/getOneProducto', async (sku, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await productoService.getOneProducto(sku,token)
    } catch (error) {
        const message = (error.reponse && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//delete tarea
export const deleteProducto = createAsyncThunk('productos/delete', async (sku, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await productoService.deleteProducto(sku, token)
    } catch (error) {
        const message = (error.reponse && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Modificar productos
export const putProducto = createAsyncThunk('productos/put', async(productoData,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log("SKU" + productoData.sku)
        console.log("Aqui el slice" + productoData)
        return await productoService.putProducto(productoData, token)
    } catch (error) {
        const message = (error.reponse && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const productoSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(crearProducto.pending, (state) => {
                state.isLoading = true
            })
            .addCase(crearProducto.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.misproductos.push(action.payload)
            })
            .addCase(crearProducto.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getProductos.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProductos.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.misproductos = action.payload
            })
            .addCase(getProductos.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteProducto.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteProducto.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.misproductos = state.misproductos.filter((producto) => producto.sku !== action.payload.sku)
            })
            .addCase(deleteProducto.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(putProducto.pending, (state) => {
                state.isLoading = true
            })
            .addCase(putProducto.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                //state.misproductos = state.misproductos.filter((producto) => producto.sku !== action.payload.sku)
                state.message = action.payload
            })
            .addCase(putProducto.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getOneProducto.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOneProducto.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.misproductos = action.payload
            })
            .addCase(getOneProducto.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = productoSlice.actions
export default productoSlice.reducer