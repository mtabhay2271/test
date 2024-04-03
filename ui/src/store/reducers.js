import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import colorGameResultReducer from "./reducers/colorGame";

const reducers = combineReducers({
  form: formReducer,
  colorGame: colorGameResultReducer,
});

export default reducers;
