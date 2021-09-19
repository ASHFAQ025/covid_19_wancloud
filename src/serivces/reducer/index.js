import { combineReducers } from "redux";
import { coivdReducer } from "./coivdReducer";
const rootReducer = combineReducers({
  coivdReducer: coivdReducer,
});
export default rootReducer;
