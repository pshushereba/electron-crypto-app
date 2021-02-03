import { combineReducers } from "redux";
import priceReducer from "./priceReducer.js";
import tweetReducer from "./tweetReducer.js";

const rootReducer = combineReducers({
  priceReducer: priceReducer,
  tweetReducer: tweetReducer,
});

export default rootReducer;
