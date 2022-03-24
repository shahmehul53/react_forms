import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

 const FComponent = () => {
     const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>
        Functional Component
<h2>{counter}</h2>
<button onClick={() => setCounter(counter + 1)}>Increment</button>
<hr></hr>
<FChild  />
    </div>
  )
}

const FChild = () => {
    const {counter, setCounter} = useContext(CounterContext)
    return(
        <div>
          <h1>  Function child component</h1>
          <h2>{counter}</h2>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default FComponent;
