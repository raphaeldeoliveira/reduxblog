import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, increment3, decrement3, clear, incrementByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(clear())
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment3())}>+3</button>
                <button onClick={() => dispatch(decrement3())}>-3</button>
                <button onClick={() => dispatch(clear())}>clear</button>
            </div>
            <input 
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add by amount</button>
                <button onClick={() => dispatch(resetAll)}>Clear</button>
            </div>
        </section>
    )
}
export default Counter