const { cakeActions } = require('../cake/cakeSlice')

const createSlice  = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams --
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    // Use
    /* Lets supose scenario where a free iceceam is given to every customer who buys a cake. In redux-toolkit we will use extraReducers which will help us in changing the state of other slices.
    * There are 2 ways to write this 
    
    * First way (Removed from redux-toolkit) (Error: The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead) */
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams --
    //     }
    // } 

    // Second way (Recommended way)
    /* 
        We use extraReducers as a function which recieves arrgument 'builder'
        Within function body we use "builder" to add a case (addCase). The first arrgument is action type, and then state & payload which are typical reducer type of functio, to mutate the state. 
    */
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIcecreams--
        })
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
