import {cofigureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})