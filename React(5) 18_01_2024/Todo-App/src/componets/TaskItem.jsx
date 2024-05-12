
const TaskItem = (item) => {
  return (
    <div>
      <h1> Task: {item.task} </h1>
      <h3> Author : {item.author} </h3>
      <p> Status: {item.completed ? "completed" : "not completed"} </p>
    </div>
  );
}

export default TaskItem
