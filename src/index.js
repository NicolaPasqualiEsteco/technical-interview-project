import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import ToDoPage from "./ToDoPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/todo/:id" element={<ToDoPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
