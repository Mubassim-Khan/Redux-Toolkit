const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

// Inspect state using ".getState()" method.
console.log("Initial State: ", store.getState())

// Listen the changes using ".subscirbe()" method.
// Removed console.log as logger middleware will do it itself.
const unSubscribe = store.subscribe(() => {})

// Dispatch action on store using 'store.dispatch()'
// For Cakes
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

store.dispatch(cakeActions.restocked(3))

// For Icecreams
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())

store.dispatch(icecreamActions.restocked(2))

unSubscribe()