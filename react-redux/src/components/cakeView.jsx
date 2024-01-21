import React from 'react';
// useSelector hook is used to get hold of any state that is mantained in Redux Store.
import { useSelector } from "react-redux";

export const CakeView = () => {
    // useSelector accepts function as its parameter & that function is called selector function.
    // Selector function accepts state as its arrgument.
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button>Order Cake</button>
            <button>Restock Cakes</button>
        </div>
    )
}
