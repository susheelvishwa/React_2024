// App.js
import  { useState } from "react";
import StopWatch from "./components/StopWatch";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      {show && <StopWatch />}
      <button className="button" onClick={handleShow}>
        TOGGLE WATCH
      </button>
    </div>
  );
};

export default App;
