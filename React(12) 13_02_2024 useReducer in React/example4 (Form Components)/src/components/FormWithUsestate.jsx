import { useState } from "react";

function Form1() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(18);
  const [country, setCountry] = useState("");

  const updateDetails = () => {
    const obj = { username, age, country };
    console.log(obj);
    setUsername("");
    setAge(18);
    setCountry("");
  };

  return (
    <>
      <h1>FORM with useState</h1>
      <label>
        Username :
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <br />
      <div>
        <button onClick={() => setAge(age - 1)}>-</button>
        <span>age : {age}</span>
        <button onClick={() => setAge(age + 1)}>+</button>
      </div>
      <br />
      <br />
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
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

export default Form1;
