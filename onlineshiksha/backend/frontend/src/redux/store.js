import { createStore } from "redux";
import rootReducer from "./rootReducers";

export const store = createStore(rootReducer);
