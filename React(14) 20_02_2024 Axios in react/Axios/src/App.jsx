import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./components/Post";

function App() {
  const [data, setData] = useState([]); 

  function getData() {
    axios
      .get("http://localhost:3000/employees")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((el) => {
          return <Post key={el.name} {...el} />;
        })
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
