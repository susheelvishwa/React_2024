Explanation
Actions:

increment and decrement are action creators that return action objects with a type property.
Reducer:

counterReducer manages the state of the counter. It listens for INCREMENT and DECREMENT actions to update the state accordingly.
Store:

The Redux store is created using the counterReducer. It holds the state of the application.
Provider:

The Provider component from react-redux wraps the entire application, making the Redux store available to all components.
React Components:

App component uses the useSelector hook to read the current state from the store and the useDispatch hook to dispatch actions when buttons are clicked.