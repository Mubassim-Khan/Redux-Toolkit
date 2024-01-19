const redux = require('redux')
const createStore = redux.createStore

// Action in Redux 
/*
 Action:
 An action is an object with "type" property
*/

const cakeOrdered = "CAKE_ORDERED";
const cakeRestocked = "CAKE_RESTOCKED";

// Action creater "Function that returns the action (object)".
function orderCake() {
    return {
        type: cakeOrdered,
        payload: 2,
        price: 50
    }
}

function restockCake(qty = 3) {
    return {
        type: cakeRestocked,
        payload: qty
    }
}

// Reducers
// It takes 2 parameters: State of app before changes (Initial State); Action to be performed (specified in Action)
// It is basically a function which returns a new state of the app, in response to actions sent to store.

const inititalState = {
    numOfCakes: 10,
    totalCash: 10
}

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case cakeOrdered:
            return {
                numOfCakes: state.numOfCakes - 2,
                totalCash: state.totalCash + 50
            }
        case cakeRestocked:
            return {
                numOfCakes: state.numOfCakes + action.payload,
                totalCash: state.totalCash
            }
        default:
            return state
    }
}

// Redux Stoe

// 1. Responsible for holding app state
// 2. Allows access to state via `getState()`
// 3. Allows state to be updated via `dispatch(action)`
// 4. Registers listeners via `subscribe(listener)`

// Accepts parameter (reducer function)
const store = createStore(reducer)
console.log("Initial State: ", store.getState())

// Allow app to subscribe the changes in app using subscribe method
const unSubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()))

// To update state use dispatch method
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(restockCake())

// 
unSubscribe();