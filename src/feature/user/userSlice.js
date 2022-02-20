import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    id: null,
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName_: (state, action) => {
            state.firstName = action.payload
        },
        setLastName_: (state, action) => {
            state.lastName = action.payload
        },
        setEmail_: (state, action) => {
            state.email = action.payload
        },
        setId_: (state, action) => {
            state.id = action.payload
        },
        setIsAuth_: (state, action) => {
            state.isAuth = action.payload
        },      
    }
})

export const { setFirstName_, setLastName_, setEmail_, setId_, setIsAuth_} = userSlice.actions
export default userSlice.reducer