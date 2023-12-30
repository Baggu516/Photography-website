import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return (
    <>
    { token ? children : <Navigate to="/login" />}
    </>
  )
};

export default PrivateRoute;