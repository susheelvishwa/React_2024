import { useReducer } from 'react'
// step 1

// you write state Logic in reducer function
// whatever reducer return become your updated state:

// 1st way
// function reducer(state, action) {
//   if (action.type === "INCREASE_count") {
//     return state + 1;
//   } else if (action.type === "DECREES_count") {
//     return state - 1 ;
//   } else {
//     throw new Error(`Action type is invalid`)
//   }
// }


// 2nd way
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_count": {
      return state + action.payload;
    }
    case "DECREES_count": {
      return state - action.payload;
    }
    default : {
      throw new Error(`Action type is invalid`)
    }
  } 
}

const CounterWithReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  // first argument `count ` - current state value;
  // second argument `dispatch` - function which update the value of count

  function handleInc(val) {
    dispatch({
      type: "INCREASE_count",
      payload: val,
    }) // dispatch describe user action/ intent
  }

  function handleDec(val) {
    dispatch({
      type: "DECREES_count",
      payload: val,
    });
  }

  return (
    <div>
      <h1>Counter With Reducer Hook</h1>
      <h1>Counter : {count}</h1>
      <button onClick={() => handleInc(1)}>Increment by 1</button>
      <button onClick={() => handleDec(1)}>Decrement by 1</button>
      <button onClick={() => handleInc(10)}>Increment by 10</button>
      <button onClick={() => handleDec(5)}>Decrement by 5</button>
    </div>
  );
}

export default CounterWithReducerHook
