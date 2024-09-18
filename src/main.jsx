import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store.jsx";
import { RefreshProvider } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RefreshProvider>
          <App />
        </RefreshProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
