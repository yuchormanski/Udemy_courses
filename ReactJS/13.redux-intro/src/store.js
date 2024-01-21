import { configureStore } from "@reduxjs/toolkit"; // new way
import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
