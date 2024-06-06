import { useState, useRef } from "react";
import Example from "./Components/Example";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";
import Example4 from "./Components/Example4";
import Example5 from "./Components/Example5";

const ButtonWithUseState = () => {
  const [count, setCount] = useState(0);

  // useState remembers value though re-renders but
  // but it triggers re-renders

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log("ButtonWithUseState rendering...", Date.now());
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>BUTTON WITH USE STATE</button>
    </div>
  );
};


const ButtonWithUseRef = () => {
  let ref = useRef(0);
  const [flag, setFlag] = useState(false);

  // useRef also remembers value through re-renders;
  // but does not trigger re-renders

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref);
  };

  console.log("ButtonWithUseRef rendering...", Date.now());
  return (
    <div>
      <h1>Count : {ref.current}</h1>
      <button onClick={handleClick}>BUTTON WITH USEREF</button>
      <br />
      <br />
      <button onClick={() => setFlag(!flag)}>{flag ? "TRUE" : "FALSE"}</button>
    </div>
  );
};


export default function App() {
  return (
    <>
      <ButtonWithUseState/>
      <ButtonWithUseRef />
      <Example/>
      <Example2/>
      <Example3/>
      <Example4/>
      <Example5/>
    </>
  )
}