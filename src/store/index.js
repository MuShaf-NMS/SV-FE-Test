import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postReducer from "./slice/post";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: [thunk],
});
