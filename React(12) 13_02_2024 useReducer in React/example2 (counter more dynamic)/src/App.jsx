import CounterWithStateHook from "./components/CounterWithStateHook"
import CounterWithReducerHook from "./components/CounterWithReducerHook"

const App = () => {
  return (
    <div>
      <CounterWithStateHook />
      <hr />
      <CounterWithReducerHook />
    </div>
  );
}

export default App
