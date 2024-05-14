import React from "react";

const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [formState, setFormState] = React.useState({
    task: "", //string (hello)
    completed: false, //Boolean (true)
    author:"",
  });

  function handleChange(event) {
    // console.log(event.target.name);

    const TargetName = event.target.name;
    const TargetValue = 
      event.target.name === "completed"
        ? event.target.checked
        : event.target.value

    setFormState({
      ...formState,
      [TargetName]: TargetValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("submit", formState);

    const newTaskArray = [...tasks, formState];
    setTasks(newTaskArray)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="author"
          type="text"
          placeholder="Aothor name"
          value={formState.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="task"
          type="text"
          placeholder="Add Task here"
          value={formState.task}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>
          Completed :{" "}
          <input
            name="completed"
            type="checkbox"
            checked={formState.completed}
            onChange={handleChange}
          />
        </label>
        <button>Add task</button>
      </form>
      <hr />

      {tasks?.map(function (item) {
        return (
          <>
            <div>
              <h1> Task: {item.task} </h1>
              <h3> Author : {item.author} </h3>
              <p> Status: {item.completed ? "completed" : "not completed"} </p>
            </div>
          </>
        );
      })}
      <div></div>
    </>
  );
};

export default App;
