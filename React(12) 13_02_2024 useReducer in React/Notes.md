># -------------------- useReducer -------------------

# `useReducer` Hook Overview

# `useReducer` in React

**`useState`** and **`useReducer`** are both hooks in React used to manage state. While **`useState`** is great for simple cases, **`useReducer`** is a better choice when you need more control over how state updates are handled, especially when your state involves multiple related values.

## Differences between `useState` and `useReducer`

**`useState`** is a simple hook that allows you to add state to your component. It takes an initial state as an argument and returns an array with the current state and a function to update it.

On the other hand, **`useReducer`** takes in a reducer function and an initial state, and returns the current state and a **`dispatch`** function. 

## What is a Reducer?

A reducer is a pure function that takes in the current state and an action, and returns the updated state. The idea behind using a reducer is to handle state updates in a centralized way. This makes the code easier to maintain and read.

To update the state, you dispatch an action object that specifies how the state should change. The action object is then passed to the reducer function, which returns the updated state.

Consider the following code that uses **`useState`** to fetch data and update the UI:


- **Purpose**: Manages complex state logic in React.
- **Comparison with `useState`**:
  - `useState`: Best for simple state updates.
  - `useReducer`: Ideal for complex state involving multiple values.

## Reducer Function

- **Definition**: A pure function that takes current state and an action, returning the updated state.
- **Usage**: Centralizes state updates for easier maintenance.

## Example Using `useReducer`

1. **State Initialization**:
   ```javascript
   const initialState = { loading: false, data: [], error: false };

2. **Reducer Function**:

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: false };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: true };
    default:
      throw new Error();
  }
}

```


3. **Implementation**:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
  dispatch({ type: 'FETCH_INIT' });

  getData(url)
    .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
    .catch(() => dispatch({ type: 'FETCH_FAILURE' }));
}, [url]);

```


4. **Component Return**:

```javascript
return state.loading ? (
  <h1>Loading...</h1>
) : state.error ? (
  <h1>Something went wrong</h1>
) : (
  <div>{state.data.map(post => <p key={post.id}>{post.title}</p>)}</div>
);

```

># Benefits of useReducer
- Simplifies state management.
- Enhances code readability.
- Centralizes state logic.



# Usage

### Implementing `useReducer`

1. **Defining the Reducer:** Create a reducer function that dictates how the state updates based on different actions.
2. **Setting up `useReducer`:** Replace `useState` with `useReducer`, providing the reducer function and the initial state.
3. **Dispatching Actions:** Use the dispatch function to update the state based on user interactions.