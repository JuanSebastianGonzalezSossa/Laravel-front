import { createSlice } from '@reduxjs/toolkit';

export const articuloslice = createSlice({
    name: 'articulo',
    initialState: {
        articulos: []
    },
    reducers: {
        onArticulos: (state, { payload }) => {
            state.articulos = payload
        },
        onAddNewArticulos: (state, { payload }) => {
            state.articulos.push(payload);
        },
        onUpdateArticulo: (state, { payload }) => {
            state.articulos = state.articulos.map(articulo => {
                if (articulo.id === payload.id) {
                    return payload;
                }

                return articulo;
            });
        },
        onDeleteArticulo: (state, { payload }) => {
            state.articulos = state.articulos.filter(articulo => articulo.id != payload.id);
        },
    }
});


// Action creators are generated for each case reducer function
export const { onArticulos, onAddNewArticulos, onUpdateArticulo, onDeleteArticulo } = articuloslice.actions;