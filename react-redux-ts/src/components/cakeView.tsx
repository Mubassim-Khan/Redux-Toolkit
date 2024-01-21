import React, { useState } from 'react';
// Import Action Creators from cakeSlice
import { ordered, restocked } from '../features/cake/cakeSlice';
// useAppSelector hook is used to get hold of any state that is mantained in Redux Store. 
// Using 'useAppDispatch' in place of 'useDispatch' same for "useAppSelector"
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const CakeView = () => {
    // useSelector accepts function as its parameter & that function is called selector function.
    // Selector function accepts state as its arrgument.
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)

    // useDispatch returns a reference to the dispatch function from redux store
    const dispatch = useAppDispatch();

    // useState to customize the restock value
    const [value, setValue] = useState(1);
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            {/* To put restock value user input. The value of input element does not have to be part of Redux store, it can be a part of local state. */}
            <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
        </div>
    )
}
