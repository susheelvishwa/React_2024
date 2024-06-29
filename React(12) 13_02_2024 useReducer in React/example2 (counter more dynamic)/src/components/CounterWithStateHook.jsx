import { useState } from "react"

const CounterWithStateHook = () => {
  const [count, setCount] = useState(0);

  function handleInc(val) {
    setCount(count + val);
  }

  function handleDec(val) {
    setCount(count - val);
  }

  return (
    <div>
      <h1>Counter With useState Hook</h1>
      <h1>Counter : {count}</h1>
      <button onClick={ () => handleInc(1)}>Increment by 1</button>
      <button onClick={ () => handleDec(1)}>Decrement by 1</button>
      <button onClick={ () => handleInc(10)}>Increment by 10</button>
      <button onClick={ () => handleDec(5)}>Decrement by 5</button>
    </div>
  );
}

export default CounterWithStateHook
