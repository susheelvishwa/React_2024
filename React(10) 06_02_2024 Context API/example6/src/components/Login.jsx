import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="text" placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
