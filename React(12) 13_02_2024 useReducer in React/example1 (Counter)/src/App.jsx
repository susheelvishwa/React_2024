import CounterWithUsestateHook from "./components/CounterWithUsestateHook";
import CounterWithReducerHook from "./components/CounterWithReducerHook"

const App = () => {
  return (
    <div>
      <CounterWithUsestateHook />
      <hr />
      <CounterWithReducerHook />
    </div>
  );
}

export default App
