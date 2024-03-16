/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    event: {}
}

const TicketSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        update: (state, action) => {
            state.event = action.payload
        }
    }
})

export const { update } = TicketSlice.actions
export default TicketSlice.reducer