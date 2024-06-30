import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
