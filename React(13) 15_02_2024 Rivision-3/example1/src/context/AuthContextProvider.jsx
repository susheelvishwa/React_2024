import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: false,
    token: "",
  });

  const login = (token) => {
    setAuthDetails({
      isLoggedIn: true,
      token,
    });
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setAuthDetails({
      isLoggedIn: false,
      token: "",
    });
    localStorage.removeItem("token");
  };

  const valueInContextBox = {
    ...authDetails,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueInContextBox}>
      {children}
    </AuthContext.Provider>
  );
};
