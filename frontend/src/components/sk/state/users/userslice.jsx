import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    current: {},
    users: [
        {
            fname: 'sk',
            lname: null,
            username: 'sk',
            email: 'kingkrabby10@gmail.com',
            password: 'sk@123',
            country: 'India',
            phone: '9342222407',
        }
    ]
}

const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        login: (state, action) => {
            state.current = action.payload
        },
        update: (state, action) => {
            const id = state.users.findIndex(user => user.email === action.payload.email)
            state.users[id] = action.payload

            state.current = action.payload
        },
        logout: state => {
            state.current = {}
        }
    }
})

export const { register, login, update, logout } = UserSlice.actions
export default UserSlice.reducer