import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import historyReducer from "./historyReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  history: historyReducer,
});

export default rootReducer;