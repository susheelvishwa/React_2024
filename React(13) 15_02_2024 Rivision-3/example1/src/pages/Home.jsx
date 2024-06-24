import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Home = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home - {token}</h1>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Home;
