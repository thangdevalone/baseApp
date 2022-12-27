import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch= useDispatch();
    const idx=useSelector(state=>state.counter);
    const  handleIncrease=()=>{
        const action=increase()
        dispatch(action)
    }
    const  handleDecrease=()=>{
        const action=decrease()
        dispatch(action)
    }
    return (
        <div>
            Counter: {idx}
            <div>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;