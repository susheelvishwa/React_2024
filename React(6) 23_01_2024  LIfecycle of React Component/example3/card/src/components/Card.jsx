// Task number 2
// Task is make a api request to response back data from the api and when user without click the button the show this data on UI

import { useEffect } from "react";
import { useState } from "react";
// make a api request from react Component
// save this response from the server in localStorage

const App = () => {
  const [data, setData] = useState([]);

  // useEffect(callback- function) ---> useEffect (function(){})
  // whatever side effects i want to perform can be performed here;
  // this callback function is called after the initial mount/initial render

  // console.log("first");

  useEffect(function () {
    // console.log("second");
    clickme();
  });

  async function clickme() {
    try {
      // console.log("clicked");
      // make àapi request and get the data
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);

      let finaldata = await response.json();
      setData(finaldata);
      // disply on this data on UI
    } catch (error) {
      console.log(error);
    }
  }

  // console.log("third");

  // console.log(data);

  // clickme();
  // this is a wrong in react because be communicate with outside of the scope right
  // the problem is rendering of components is block
  // the solution react provide HOOKS for handles sideEffect its called a *useEffect*

  return (
    <>
      <h1>Saving api response in react component</h1>
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
