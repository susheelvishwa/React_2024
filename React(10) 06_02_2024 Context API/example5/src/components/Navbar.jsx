import React, { useContext } from "react";
import Button from "./button";
import { counterContext } from "../context/context";

const Navbar = () => {
  const { count, setCount } = useContext(counterContext);
  return (
    <div>
      Navbar
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <Button />
    </div>
  );
};

export default Navbar;
