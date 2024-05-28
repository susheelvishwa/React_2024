import { useEffect, useState, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(10);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cleanup = () => {
      stopTimer();
    };
    return cleanup;
  }, []);

  const startTimer = () => {
    if (intervalRef.current !== null) {
      console.log(`timer is already running`);
      return;
    }
    intervalRef.current = setInterval(() => {
      console.log(`timer running`, Date.now());
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalRef.current);
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    console.log(`timer stopped`);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(10);
  };

  return (
    <div>
      <h6>{count} </h6>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default Timer;
