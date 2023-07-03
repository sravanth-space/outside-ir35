import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../store";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store: RootState) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectedRoute;
