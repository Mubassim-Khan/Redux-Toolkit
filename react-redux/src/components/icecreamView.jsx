import React, { useState } from 'react';
// useSelector hook is used to get hold of any state that is mantained in Redux Store.
import { useSelector, useDispatch } from "react-redux";
// Import Action Creators from cakeSlice
import { ordered, restocked } from '../features/icecream/icecreamSlice';

export const IcecreamView = () => {
    // useSelector accepts function as its parameter & that function is called selector function.
    // Selector function accepts state as its arrgument.
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)

    // useDispatch returns a reference to the dispatch function from redux store
    const dispatch = useDispatch()

    // useState to customize the restock value
    const [value, setValue] = useState(1);

    return (
        <div>
            <h2>Number of Ice creams - {numOfIcecreams} </h2>
            <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
            {/* To put restock value user input. The value of input element does not have to be part of Redux store, it can be a part of local state. */}
            <input type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(value))}>Restock Ice creams</button>
        </div>
    )
}
