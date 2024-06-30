import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer.jsx";

const store = createStore(rootReducer);

export default store;
