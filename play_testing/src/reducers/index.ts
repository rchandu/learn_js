import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "./items";

export default combineReducers({
  items: itemsReducer,
});
