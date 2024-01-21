import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10
}

// Created a feature 'Slice' using 'createSlice' which generates actions & reducers.
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    // Performs direct mutations in state using 'Immer' (used before)
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions