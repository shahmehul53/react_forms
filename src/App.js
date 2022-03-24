import React, {useState} from 'react'
import CComponent from './CComponent';
import { CounterContext } from './CounterContext';
import FComponent from './FComponent';
import ScreenComponent from './ScreenComponent';
import useCounter from './useCounter';

export const App = () => {
  const [counter, increment, decrement, reset] = useCounter(2);
  
  return (
    <div>
      <h1>Custom Hook Example</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <hr></hr>
      <ScreenComponent />
    </div>
  )
}


export default App;
