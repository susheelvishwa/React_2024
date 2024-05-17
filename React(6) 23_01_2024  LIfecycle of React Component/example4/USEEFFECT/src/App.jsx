import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(function () {
    clickme(page);
  },[page]);

  async function clickme() {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
      );

      let finaldata = await response.json();
      setData(finaldata);
    } catch (error) {
      console.log(error);
    }
    }
    
    function prev() {
        setPage(page-1)
    }

    function next() {
      setPage(page + 1);
    }

  return (
    <>
      <div>
        <button onClick={prev}>prev</button>
        <p>page number: {page}</p>
        <button onClick={next}>next</button>
      </div>
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
        </div>
      ))}
    </>
  );
};

export default App;
