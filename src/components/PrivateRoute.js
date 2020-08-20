import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function PrivateRoute({ component: Component, isLoggedIn, ...rest}) {
  return (
    <Route
    {...rest}
    //si no estas logeado te redirecciona a login y sino renderiza el contenido que traes por props
    render={ (props) => isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />}
    />
  );
}

export default withAuth(PrivateRoute);