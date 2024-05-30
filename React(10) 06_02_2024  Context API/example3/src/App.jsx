import { useContext } from "react";
import Child1 from "./components/Child1";
import { AuthContext } from "./context/AuthContextProvider";

const App = () => {
  const val = useContext(AuthContext);
  console.log(val);

  return (
    <div>
      <Child1 />
    </div>
  );
};

export default App;
