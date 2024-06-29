import { useState } from "react"

const CounterWithStateHook = () => {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter With useState Hook</h1>
      <h1>Counter : {count}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

export default CounterWithStateHook
