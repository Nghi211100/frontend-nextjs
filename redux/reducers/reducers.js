import { combineReducers } from "redux";
import {
  allWorkReducer,
  updateReducer,
  addWorkReducer,
  removeWorkReducer,
  updateNameReducer,
} from "./workReducer";

const reducer = combineReducers({
  allWorkReducer,
  updateReducer,
  addWorkReducer,
  removeWorkReducer,
  updateNameReducer,
});

export default reducer;
