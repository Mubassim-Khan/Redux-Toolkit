const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

// Inspect state using ".getState()" method.
console.log("Initial State: ", store.getState())

// Listen the changes using ".subscirbe()" method.
const unSubscribe = store.subscribe(() => {
    // Inspect state using ".getState()" method.
    console.log("Updated State: ", store.getState())
})

// Dispatch action on store using 'store.dispatch()'
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

store.dispatch(cakeActions.restocked(3))

unSubscribe()