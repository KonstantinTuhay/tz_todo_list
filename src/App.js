import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginUsers from "./components/Authorization/LoginUsers";
import Authorization from "./components/Authorization/Authorization";
import PrivateRoute from "./components/Authorization/PrivateRoute";
import AllTodo from "./AllTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginUsers />} />
        <Route path="authorization" element={<Authorization />} />
        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        {/* <PrivateRoute path="todo" element={<AllTodo />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<AllTodo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
