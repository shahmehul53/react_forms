import React, { useMemo, useState, useEffect, useCallback } from 'react'

 const App = () => {
   const [counter, setCounter] = useState(1)
   const result = useMemo(() => {
     return factorial(counter);
   }, [counter]) 
   const [name, setName] = useState('')

   const displayName = useCallback((greeting) => {
    return greeting + " " + name;
  }, [name])

  
  return (
    <div>
      <h1>
        Factorial of {counter} is: <span>{result}</span>
      </h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <hr></hr>
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input
        type="text"
        placeholder="Enter Name" 
        value={name}
        onChange={(e) => setName(e.target.value) }
        />
        <hr></hr>
        <DisplayName displayName={displayName}/>
       
      </div>
    </div>
  )
}

const DisplayName = ({displayName}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
   setValue(displayName("Hello"));
   console.log("component rendered")
  }, [displayName])
  
  return (
    <p>{`My name is ${value}`}</p>
  )
};

function factorial(n) {
  let i = 0;

  if (n < 0) {
    return -1;
  } 
  if (n === 0) {
    return 1;
  }
  return n*factorial(n-1);
}


export default App;
