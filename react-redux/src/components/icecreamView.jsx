import React from 'react';
// useSelector hook is used to get hold of any state that is mantained in Redux Store.
import { useSelector } from "react-redux";

export const IcecreamView = () => {
    // useSelector accepts function as its parameter & that function is called selector function.
    // Selector function accepts state as its arrgument.
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    return (
        <div>
            <h2>Number of Ice creams - {numOfIcecreams} </h2>
            <button>Order Ice cream</button>
            <button>Restock Ice creams</button>
        </div>
    )
}
