import { configureStore } from '@reduxjs/toolkit';
import { authSlice, userSlice, articuloslice, uiSlice, Categoriaslice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        articulo: articuloslice.reducer,
        ui: uiSlice.reducer,
        categoria: Categoriaslice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})