import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Child1 = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  return (
    <>
      <div>Child 1 : {isLoggedIn}</div>
      <button onClick={() => setIsLoggedIn("white")}>change</button>
    </>
  );
};

export default Child1;
