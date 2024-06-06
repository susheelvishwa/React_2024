import { useState, useEffect } from "react";
import "./App.css";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { ErrorIndicator } from "./components/ErrorIndicator";
import { TaskItem } from "./components/TaskItem";


// --------------------------First way to do this thing-----------------------------------------------
  
// function TaskItem(props) {
//   console.log(props);
//   return (
//     <div className="Box">
//               <p>ID : {taskItem.id} </p>
//               <p>Title : {taskItem.title}</p>
//               <p>IsCompleted : {taskItem.isCompletes ? "Yes" : "No"}</p>
//               <p key={taskItem.id}> Name : {taskItem.assignee}</p>
//               <p>Priority: {taskItem.priority}</p>
//             </div>
//   )
// }

// --------------------------------------------------------------------------------

function App() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchAndUpdateData(`http://localhost:3002/tasks`);
  }, []);

  const fetchAndUpdateData = async (url) => {
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }

  return (
    <center>
      <div className="App">
        <h1>
          <b>List of Tasks</b>
        </h1>
        {tasks.map((taskItem) => {
          return <TaskItem {...taskItem} key={taskItem.title} />;
        })}
      </div>
    </center>
  );
}

export { App };
