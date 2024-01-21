import { applyMiddleware, combineReducers, createStore } from "redux"; //old deprecated version
import { thunk } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit"; // new way

import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
