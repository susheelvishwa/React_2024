import { useRef } from "react";

const Example3 = () => {
  const InputRef = useRef(null);
  // {current : input}

  const handleClick = () => {
    InputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="add todo here" ref={InputRef} />
      <hr />
      <button onClick={handleClick}>Focus on the input</button>
    </div>
  );
};

export default Example3;
