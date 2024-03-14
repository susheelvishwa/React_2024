// Task number 2
// Task is make a api request to response back data from the api and when user without click the button the show this data on UI

import { useState } from "react";
// make a api request from react Component
// save this response from the server in localStorage

const App = () => {
  const [data, setData] = useState([]);

  async function clickme() {
    try {
      console.log("clicked");
      // make àapi request and get the data
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);

      let finaldata = await response.json();
      setData(finaldata);
      // disply on this data on UI
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data);

  clickme();

  return (
    <>
      <h1>Saving api response in react component</h1>
      <button onClick={clickme}>click me to get the data</button>
      {data.map((todo) => (
        <div
          style={{
            border: "1px solid black",
            margin: "15px",
            padding: "15px",
            backgroundColor: "black",
            color: "red",
          }}
          key={todo.id}
        >
          <p>ID : {todo.id} </p>
          <p>Product : {todo.title}</p>
          <p>Completed : {todo.completed ? "yes" : "No"}</p>
          <p>Email: {todo.email}</p>
          <p>NAme:{todo.username}</p>
        </div>
      ))}
    </>
  );
};

export default App;
