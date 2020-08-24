import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function PrivateRoute({ component: Component, isLoggedIn, ...rest}) {
  return (
    <Route
    {...rest}
    render={ (props) => isLoggedIn ? <Component {...props} /> : <Redirect to="./feed/feed" />}
    />
  );
}

export default withAuth(PrivateRoute);