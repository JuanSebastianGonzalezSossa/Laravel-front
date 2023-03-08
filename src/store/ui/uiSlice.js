import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
        isSuccessOpen: false,
        isNow: {},
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        },
        onOpenSuccess: (state) => {
            state.isSuccessOpen = true;
        },
        onCloseSuccess: (state) => {
            state.isSuccessOpen = false;
        },
        onUpdateNow: (state, { payload }) => {
            state.isNow = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal, onCloseSuccess, onOpenSuccess, onUpdateNow } = uiSlice.actions;
