import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowCart: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart (state) {
            state.isShowCart = !state.isShowCart;
        },
        setNotification (state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
})

export default uiSlice;
export const { toggleCart, setNotification } = uiSlice.actions;