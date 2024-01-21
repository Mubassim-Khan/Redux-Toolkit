// To make use of asyncFunctions we use async thunk functions.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: true,
    users: [],
    error: ''
}

// Generates pending, fulfilled & rejected action types.
// createAsyncThunk accepts action type as 1st arrgument, and a async callback function as 2nd arrgument 
// Callback function, contain async logic and returns promise
// createAsyncThunk will dispatch promise lifecycle, that we can listen using extraReducers
// The lifecycle includes, pending, rejected and fulfilled.
// createAsyncThunk uses 'thunk' library under the hood.

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },
})

export default userSlice.reducer