// To make use of asyncFunctions we use async thunk functions.
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type User = {
    id: number,
    name: string
}

type InitialState = {
    loading: boolean
    // The users is an array, where each user is an object. The user has quite properties, but we will only use id and name for now. 
    users: User[]
    error: string
  };

const initialState: InitialState = {
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
    // Reducers is a mandatory property in Typescript add it in createSlice method, either if there is no use of it.
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false
            state.users = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            // The error message can also be undefined so add default message
            state.error = action.error.message || 'Something went wrong !'
        })
    },
})

export default userSlice.reducer