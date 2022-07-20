import { combineReducers } from "redux";
import { workReducer } from "./workReducer";

const reducer = combineReducers({
  workReducer,
});

export default reducer;
