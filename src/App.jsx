import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginUsers from "./pages/Registr";
import Authorization from "./pages/Authorization";
import PrivateRoute from "./components/PrivateRoutes";
import AllTodo from "./pages/AllTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginUsers />} />
        <Route path="authorization" element={<Authorization />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<AllTodo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
