import React, {useState} from 'react'
import CComponent from './CComponent';
import { CounterContext } from './CounterContext';
import FComponent from './FComponent';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>App Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr></hr>
      <CounterContext.Provider value={{counter, setCounter}}>
      <FComponent  />
      <hr></hr>
      {/* <CComponent  /> */}
      </CounterContext.Provider>
    </div>
  )
}


export default App;
