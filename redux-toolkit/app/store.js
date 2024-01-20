const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require("../features/cake/cakeSlice")

// Create store using 'configureStore' function & attach reducer
const store = configureStore({
    reducer: {
        cake: cakeReducer,
    },
})

module.exports = store