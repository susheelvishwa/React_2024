import React, { useContext } from "react";
import { counterContext } from "../context/context";

const Components1 = () => {
  const { count } = useContext(counterContext);

  return <div>Count from context: {count}</div>;
};

export default Components1;
