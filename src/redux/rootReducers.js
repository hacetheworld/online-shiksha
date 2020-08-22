import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducers";
import courseReducer from "./reducers/courseReducers";

export default combineReducers({
  user: userReducer,
  courses: courseReducer,
});
