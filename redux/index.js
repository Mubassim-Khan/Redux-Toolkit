const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// Action in Redux 
/*
 Action:
 An action is an object with "type" property
*/

const cakeOrdered = "CAKE_ORDERED";
const cakeRestocked = "CAKE_RESTOCKED";

const icecreamOrdered = "ICECREAM_ORDERED";
const icecreamRestocked = "ICECREAM_RESTOCKED";

// Action creater "Function that returns the action (object)".
function orderCake() {
    return {
        type: cakeOrdered,
        payload: 2,
        price: 50
    }
}

function restockCake(qty = 1) {
    return {
        type: cakeRestocked,
        payload: qty
    }
}

function orderIcecream() {
    return {
        type: icecreamOrdered,
        payload: 1,
        price: 80
    }
}

function restockIcecream(qty = 1) {
    return {
        type: icecreamRestocked,
        payload: qty
    }
}

// Reducers
// It takes 2 parameters: State of app before changes (Initial State); Action to be performed (specified in Action)
// It is basically a function which returns a new state of the app, in response to actions sent to store.

const cakeState = {
    numOfCakes: 10,
    Price: 50,
    totalAmount: 10
}

const icecreamState = {
    numOfIcecreams: 20,
    Price: 80,
    totalAmount: 10
}

const cakeReducer = (state = cakeState, action) => {
    switch (action.type) {
        case cakeOrdered:
            return {
                ...cakeState,
                numOfCakes: state.numOfCakes - 2,
                totalAmount: state.totalAmount + 50
            }
        case cakeRestocked:
            return {
                ...cakeState,
                numOfCakes: state.numOfCakes + action.payload,
                totalAmount: state.totalAmount
            }
        default:
            return state
    }
}

const icecreamReducer = (state = icecreamState, action) => {
    switch (action.type) {
        case icecreamOrdered:
            return {
                ...icecreamState,
                numOfIcecreams: state.numOfIcecreams - 1,
                totalAmount: state.totalAmount + 80
            }
        case icecreamRestocked:
            return {
                ...icecreamState,
                numOfIcecreams: state.numOfIcecreams + action.payload,
                totalAmount: state.totalAmount
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

// Using combineReducers which is used to combine more than 1 reducer into one object reducer, which is wrapped in an object.
const reducers = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

// Accepts parameter (reducer function)
const store = createStore(reducers)
console.log("Initial State: ", store.getState())

// Allow app to subscribe the changes in app using subscribe method
const unSubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()))

// To update state use dispatch method
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(4))

// Bind Action Creators

// Can also use bindActionCreators as an alternative to displatch an action
// Normally you should just call dispatch directly on your Store instance. If you use Redux with React, react-redux will provide you with the dispatch function so you can call it directly, too.
// The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.

const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch)
actions.orderCake();
actions.orderCake();

actions.restockCake(4);

actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(2);


// 
unSubscribe();