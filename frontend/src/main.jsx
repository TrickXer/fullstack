import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./components/sk/state/store";
import { PersistGate } from "redux-persist/integration/react";
// import { purgeStoredState } from "./components/sk/state/store";

// purgeStoredState()

// document.title = "WrapIt"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
