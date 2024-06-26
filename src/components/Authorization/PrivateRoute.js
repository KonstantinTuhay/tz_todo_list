import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ ...props }) => {
  const isAuth = localStorage.getItem("token");
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
