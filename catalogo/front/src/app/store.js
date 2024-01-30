import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productoReducer from '../features/productos/productoSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        producto: productoReducer
    }
})