import { useReducer } from "react";

const initState = {
  username: "",
  age: 18,
  country: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "INCREASE_AGE":
      return { ...state, age: state.age + 1 };
    case "DECREASE_AGE":
      return { ...state, age: state.age - 1 };
    case "CHANGE_COUNTRY":
      return { ...state, country: action.payload };
    case "RESET_VALUES":
      return { ...initState };
    default:
      throw new Error(`Action type is invalid`);
  }
};

function Form2() {
  const [state, dispatch] = useReducer(reducer, initState);

  const updateDetails = () => {
    console.log(state);
    dispatch({ type: "RESET_VALUES" });
  };

  const { username, age, country } = state;
  return (
    <>
      <h1>FORM with UseReducer</h1>
      <label>
        Username :
        <input
          value={username}
          onChange={(e) =>
            dispatch({ type: "UPDATE_USERNAME", payload: e.target.value })
          }
        />
      </label>
      <br />
      <br />
      <div>
        <button onClick={() => dispatch({ type: "DECREASE_AGE" })}>-</button>
        <span>age : {age}</span>
        <button onClick={() => dispatch({ type: "INCREASE_AGE" })}>+</button>
      </div>
      <br />
      <br />
      <select
        value={country}
        onChange={(e) =>
          dispatch({ type: "CHANGE_COUNTRY", payload: e.target.value })
        }
      >
        <option value="">Select a Country</option>
        <option value="INDIA">INDIA</option>
        <option value="CHINA">CHINA</option>
        <option value="UAE">UAE</option>
        <option value="TURKEY">TURKEY</option>
      </select>
      <br />
      <br />
      <button onClick={updateDetails}>UPDATE DETAILS</button>
      <br />
    </>
  );
}

export default Form2;
