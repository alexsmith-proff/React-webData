import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import allEndpoints from '../../services/api'

const initialState = {
    user : {}    
}

export const getUserData = createAsyncThunk('user/getUserData', async(_, { rejectWithValue, dispatch }) => {
    //Запрос
    const response = await allEndpoints.auth.getProfile({})
    // console.log(response.data)
    dispatch(setUserData(response.data))
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getUserData.pending]: () => {}, // pending вызывается тогда, когда вызывается getPosts
        [getUserData.fulfilled]: () => {}, // fulfilled вызывается тогда, когда запрос прошел успешно
        [getUserData.rejected]: () => {}, // rejected вызывается тогда, когда есть ошибка        
    }
})

export const { setUserData} = userSlice.actions
export default userSlice.reducer