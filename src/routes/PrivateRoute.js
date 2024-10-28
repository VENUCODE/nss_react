import React from "react";
import { Route, Navigate } from "react-router-dom";
import useUser from "../contexts/userContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useUser();

  return isAuthenticated ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
