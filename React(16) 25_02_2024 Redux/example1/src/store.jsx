import { createStore } from "redux";
import counterReducer from "./reducer.jsx";

const store = createStore(counterReducer);

export default store;
