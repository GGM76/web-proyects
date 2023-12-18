import { createSlice, createAsyncThunk } from '@redux/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
 //registrar usuario
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWihtValue(message)
    }
})

//logear usuario 
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWihtValue(message)
    }
})

//logout al usuario
export const logout = createAsyncThunk('auth/logout', async() =>{
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false 
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(register.fullfield, (state, actions) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, actions) =>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user.null
            })
            .addCase(login.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(login.fullfield, (state, actions) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, actions) =>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user.null
            })
            .addCase(logout.fullfield, (state) =>{
                state.isSuccess = true
                state.user = null
            })
    }
})

export const {reset} = authslice.actions
export default authSlice.reducer