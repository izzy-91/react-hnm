import React from "react";
import ProductDetail from "../page/ProductDetail";
import Login from "../page/Login";
import { Navigate } from "react-router";

const PrivateRoute = ({ authenticate }) => {
    return authenticate == true ? <ProductDetail /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
