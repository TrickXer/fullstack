import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from "./components/sk/state/store";
import { PersistGate } from "redux-persist/integration/react";
// import { purgeStoredState } from "./components/sk/state/store";

// purgeStoredState()

// document.title = "WrapIt"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)