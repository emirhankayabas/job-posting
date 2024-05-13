import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import companyReducer from "./companySlice";
import searchReducer from "./searchSlice";
import jobReducer from "./jobSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  company: companyReducer,
  search: searchReducer,
  job: jobReducer,
});

export default rootReducer;
