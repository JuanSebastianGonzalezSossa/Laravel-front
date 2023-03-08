import { createSlice } from '@reduxjs/toolkit';

export const Categoriaslice = createSlice({
    name: 'Categoria',
    initialState: {
        Categorias: []
    },
    reducers: {
        onCategorias: (state, { payload }) => {
            state.Categorias = payload
        },
        onAddNewCategorias: (state, { payload }) => {
            state.Categorias.push(payload);
        },
        onUpdateCategoria: (state, { payload }) => {
            state.Categorias = state.Categorias.map(Categoria => {
                if (Categoria.id === payload.id) {
                    return payload;
                }

                return Categoria;
            });
        },
        onDeleteCategoria: (state, { payload }) => {
            state.Categorias = state.Categorias.filter(Categoria => Categoria.id != payload.id);
        },
    }
});


// Action creators are generated for each case reducer function
export const { onCategorias, onAddNewCategorias, onUpdateCategoria, onDeleteCategoria } = Categoriaslice.actions;