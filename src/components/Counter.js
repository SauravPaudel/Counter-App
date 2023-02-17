import React, { useState } from 'react';
import './Global.css';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className ="container">
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <button className ="btn-in" onClick={increment}>Increment</button>
      <button className ="btn-dc" onClick={decrement}>Decrement</button>
      <button className ="btn-re" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
