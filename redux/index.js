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