import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementWithAmount } from './features/counterSlice';
import { RootState } from './store';

function App() {

  const [amount, setAmount] = useState<number>(0);

  const dispatch = useDispatch();

  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
      <br />
      <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      <button onClick={() => dispatch(incrementWithAmount(amount))}>set</button>
    </>

  );
}

export default App;
