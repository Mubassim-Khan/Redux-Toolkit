import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer from '../features/user/userSlice'

// Create store using 'configureStore' function & attach reducer
const store = configureStore({
    // Note: We don't have to use combineReducers() as in plain Redux. configureStore (redux-toolkit) also applies same thing in background. We can add as many reducers as we want. 
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // To apply "middleware", add this property after "reducer" property.
    // The function recieves a function itself as an arrgument, return getDefaultMiddleware() & concat the list wwith logger.
    // By default configureStore adds some middleware to redux store setup. We are basically concatinating the default middleware along with our logger middleware.
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch