import { useEffect, useRef } from "react";
//step 1 : import useRef

const Example2 = () => {
  const inputRef = useRef(null);
  // step 2 : initialize it

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="add todo here" />
      {/* {step 3 : pass variable} */}
    </div>
  );
};

export default Example2;
