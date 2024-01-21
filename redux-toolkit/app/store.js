const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/icecreamSlice")

// Logger middleware
const logger = reduxLogger.createLogger()

// Create store using 'configureStore' function & attach reducer
const store = configureStore({
    // Note: We don't have to use combineReducers() as in plain Redux. configureStore (redux-toolkit) also applies same thing in background. We can add as many reducers as we want. 
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    // To apply "middleware", add this property after "reducer" property.
    // The function recieves a function itself as an arrgument, return getDefaultMiddleware() & concat the list wwith logger.
    // By default configureStore adds some middleware to redux store setup. We are basically concatinating the default middleware along with our logger middleware.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store