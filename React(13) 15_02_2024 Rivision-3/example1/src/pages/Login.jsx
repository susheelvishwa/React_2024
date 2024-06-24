import { useReducer, useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function reducer(state, { type, payload }) {
  switch (type) {
    case "CHANGE_EMAIL":
      return { ...state, email: payload.email };
    case "CHANGE_PASSWORD":
      return { ...state, password: payload.password };
    default:
      throw new Error(`invalid action type`);
  }
}

const initState = {
  email: "",
  password: "",
};

function Login() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const userAuthDetails = await res.json();
      console.log(userAuthDetails);

      if (userAuthDetails.token) {
        const token = userAuthDetails.token;
        login(token);
        navigate("/")
      }

      
    } catch (error) {
      console.log(error);
    }
  }

  const { email, password } = state;
  return (
    <div className="login-form">
      <label>
        Email :
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_EMAIL",
              payload: { email: e.target.value },
            })
          }
        />
      </label>
      <label>
        Password :
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_PASSWORD",
              payload: { password: e.target.value },
            })
          }
        />
      </label>
      <button onClick={handleClick}>LOGIN</button>
    </div>
  );
}

export default Login;
