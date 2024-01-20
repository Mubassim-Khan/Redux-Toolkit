const redux = require('redux');
// Use 'produce' method to change the state in mutable way. (Produce method is a part of Immer package).
const produce = require("immer").produce

const InitialState = {
    name: "MAK",
    address: {
        street: "123 Downtown ST",
        city: "NYC",
        state: "NY"
    },
}

const STREET_UPDATE = "STREET_UPDATE";

const updateStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street
    }
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }

            // Immer
            // Immer simplifies the handling of immutable data structures, and keeps track of it.
            // The first parameter is current state, second parameter is of a function which recieves a draft copy of state.
            // Immer allows to change the draft state, as it is mutable.
            return produce(state, (draft) => {
                // This line works the same as above commented lines of code
                draft.address.street = action.payload
            })
        default: {
            return state
        }
    }
}

const store = redux.createStore(reducer)
console.log("Initial State: ", store.getState())

const unSubscribe = store.subscribe(() => {
    console.log("Updated State: ", store.getState())
})

store.dispatch(updateStreet("456 Main St"))
unSubscribe();