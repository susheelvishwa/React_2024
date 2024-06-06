import React, { useContext } from "react";
import Components1 from "./Components1";
import { counterContext } from "../context/context";

const Button = () => {
  const { count, setCount } = useContext(counterContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <Components1 />
    </div>
  );
};

export default Button;
