import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import LoginButton from "./LoginButton";

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header>
      <h1>Welcome {isLoggedIn ? "User" : "Guest"}</h1>
      <LoginButton />
    </header>
  );
};

export default Header;
