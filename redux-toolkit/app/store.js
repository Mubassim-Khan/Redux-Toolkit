const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/icecreamSlice")

// Create store using 'configureStore' function & attach reducer
const store = configureStore({
    // Note: We don't have to use combineReducers() as in plain Redux. configureStore (redux-toolkit) also applies same thing in background. We can add as many reducers as we want. 
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
})

module.exports = store