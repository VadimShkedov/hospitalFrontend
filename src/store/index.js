import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { registrationReducer } from "./reducers/registrationReducer";

export const store = createStore(combineReducers({
  registration: registrationReducer
}), applyMiddleware(thunk))