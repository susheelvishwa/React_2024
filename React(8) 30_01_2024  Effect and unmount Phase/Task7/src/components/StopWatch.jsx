import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  // useEffect(function () {
  //   setInterval(function () {
  //     console.log("hello");
  //     setTime(time + 1)
  //   },1000);
  // }, [])

  useEffect(function () {
    const intervalId = setInterval(function () {
      console.log("clicked");
      setTime(function (presValue) {
        return presValue + 1;
      });
    }, 1000);

    function cleanup() {
      console.log("cleanup");
      clearInterval(intervalId);
    }

    return cleanup;
  }, []);

  return (
    <div>
      <h1>Time : {time}</h1>
    </div>
  );
};

export default StopWatch;

// 1. Lifecycle event ( mount phase )
// 2. setInterval
//    interacting with browser API(outside world)
//    side-effect
