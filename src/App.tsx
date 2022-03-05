import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  amountAdded,
  decremented,
  incremented,
  resetCounter,
} from './features/counter/counterSlice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleIncremented() {
    dispatch(incremented());
  }
  function handleIncremented3() {
    dispatch(amountAdded(3));
  }
  function handleDecremented() {
    dispatch(decremented());
  }
  function handleReset() {
    dispatch(resetCounter());
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>count is: {count}</p>
        <p>
          <button onClick={handleIncremented}>incremented</button>
          <button onClick={handleIncremented3}>incremented3</button>
          <button onClick={handleDecremented}>decremented</button>
          <button onClick={handleReset}>resetCounter</button>
        </p>
      </header>
    </div>
  );
}

export default App;
