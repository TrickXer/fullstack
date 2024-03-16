/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    event: {}
}

const CheckoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        update: (state, action) => {
            state.event = {...state.event, ...action.payload}
        }
    }
})

export const { update } = CheckoutSlice.actions
export default CheckoutSlice.reducer