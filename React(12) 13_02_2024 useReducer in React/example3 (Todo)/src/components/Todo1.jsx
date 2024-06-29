// src/components/Todo.jsx
import { useReducer } from "react";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import reducer from "../reducer";

const initState = [
  { id: 1, title: "Learn React", status: false },
];

function Todo1() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleAdd = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { id },
    });
  };

  return (
    <>
      <AddTodo handleAdd={handleAdd} />
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </>
  );
}

export default Todo1;
