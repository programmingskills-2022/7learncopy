import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./features";
import { Provider } from "react-redux";
import { GeneralContextProvider } from "./store/GeneralContext";
import { fetchArticles } from "./features/Articles";

store.dispatch(fetchArticles());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <GeneralContextProvider>
      <App />
    </GeneralContextProvider>
  </Provider>
);
