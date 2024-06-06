import { useEffect, useState } from "react";

const Example4 = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    // useEffect callback start here
    const interValID = setInterval(() => {
      console.log(`intervalID is Running`, Date.now());
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(interValID);
          console.log("cleanup called");
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      console.log(`cleanup called in return function`);
      clearInterval(interValID);
    };

    // useEffect callback ends here
  }, []);

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>Count : {count}</h3>
    </div>
  );
};

export default Example4;
