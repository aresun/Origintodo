import { combineReducers } from "redux";
import unfinished from "./unfinished";
import finished from "./finished";
import trash from "./trash";

export default combineReducers({
  unfinished,
  finished,
  trash
});
