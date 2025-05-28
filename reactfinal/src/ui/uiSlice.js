import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShelterModalOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openShelterModal: (state) => {
            state.isShelterModalOpen = true;
        },
        closeShelterModal: (state) => {
            state.isShelterModalOpen = false;
        }

    },
});

export const { openShelterModal, closeShelterModal } = uiSlice.actions;
export default uiSlice.reducer;