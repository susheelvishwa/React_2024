import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const LoginButton = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? "Log Out" : "Log In"}
    </button>
  );
};

export default LoginButton;
