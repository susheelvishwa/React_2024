import { combineReducers } from "redux";
import todoReducer from "./todoReducer.jsx";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
