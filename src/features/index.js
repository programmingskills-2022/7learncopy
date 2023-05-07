import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./Comments";
import articleReducer from "./Articles";

const store = configureStore({
  reducer: { comments: commentsReducer, articles: articleReducer },
});

export default store;
