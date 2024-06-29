import Todo from './components/Todo'
import Todo1 from './components/Todo1';

const App = () => {
  return (
    <div>
      <h1>Todo App using usestate Hook</h1>
      <Todo />
      <br />
      <br />
      <hr />

      <h1>Todo App using useReducer Hook</h1>
      <Todo1 />
    </div>
  );
}

export default App
