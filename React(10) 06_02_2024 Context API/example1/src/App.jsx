import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2"

const App = () => {
  const [value, setValue] = useState();

  return (
    <div>
      {/* {value} */}
      <br />
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <Child1 value={value} />
      <Child2 value={value} />
    </div>
  );
};

export default App;
