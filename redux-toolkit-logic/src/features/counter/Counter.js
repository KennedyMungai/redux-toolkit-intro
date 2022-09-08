import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
        decrement, 
        increment, 
        reset,
        incrementByAmount 
    } from './counterSlice';



const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch=useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue=Number(incrementAmount) || 0;

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    )
}

export default Counter