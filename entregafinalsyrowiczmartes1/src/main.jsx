import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./contexts/ItemsContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdiTFuwRqPJ9NMnPi5G-gU-YiNieY6L3w",
  authDomain: "mart4dic.firebaseapp.com",
  projectId: "mart4dic",
  storageBucket: "mart4dic.firebasestorage.app",
  messagingSenderId: "71501611597",
  appId: "1:71501611597:web:fe5832d2d03d503eabd204",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);





