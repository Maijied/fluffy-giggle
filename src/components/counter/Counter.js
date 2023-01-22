import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "../../redux/state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch =  useDispatch();
  return (
    <div className='card border-dark text-center shadow-lg p-3 mb-5 bg-body rounded'>
        <div className='card-header bg-secondary'>
            <h4 className='text-white'>Redux Counter App</h4>
        </div>
        <div className='card-body'>
            <h1>{count}</h1>

            <div className='my-4'>
                <button onClick={()=>{dispatch(increment())}} className='btn btn-success'>Increase</button>
                <button onClick={()=>{dispatch(decrement())}} className='btn btn-danger mx-2'>Decrease</button>
            </div>
        </div>
    </div>
  );
}

export default Counter;
