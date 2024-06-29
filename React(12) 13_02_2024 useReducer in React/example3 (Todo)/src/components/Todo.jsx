import { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const initState = [
  { id: 1, title: "Learn React", status: false },
];

function Todo() {
  const [state, setState] = useState(initState);

  const handleAdd = (task) => {
    setState([...state, task]);
  };

  const handleDelete = (id) => {
    const todosAfterDeletion = state.filter((todo) => todo.id !== id);
    setState(todosAfterDeletion);
  };

  const handleToggle = (id) => {
    const todosAfterToggle = state.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setState(todosAfterToggle);
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

export default Todo;
