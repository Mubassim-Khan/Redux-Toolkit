// Action in Redux 
/*
 Action:
 An action is an object with "type" property
*/

const cakeOrdered = "CAKE_ORDERED";

// Action creater "Function that returns the action (object)".
function orderCake() {
    return {
        type: cakeOrdered,
        quantity: 2,
        price: 50
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
        default:
            return state
    }
}
