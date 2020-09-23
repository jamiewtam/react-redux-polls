import { combineReducers } from "redux";

import pollReducer from "./pollReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  pollReducer,
  userReducer,
  loadingReducer,
});
