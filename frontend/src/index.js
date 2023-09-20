import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/globalContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "./context/userContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<GoogleOAuthProvider clientId="563427872776-cfpj7nennank6l3rvn8chuk79fdt7btg.apps.googleusercontent.com">
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
