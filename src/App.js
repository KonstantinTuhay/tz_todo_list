import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginUsers from "./components/Authorization/LoginUsers";
import Authorization from "./components/Authorization/Authorization";
import AllTodo from "./AllTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllTodo />} />
        <Route path="login" element={<LoginUsers />} />
        <Route path="/login/authorization" element={<Authorization />} />

        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      </Routes>
    </div>
  );
}

export default App;
