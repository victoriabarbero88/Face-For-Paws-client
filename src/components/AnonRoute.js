import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

//esta ruta trae datos del component y si esta logeado le envía  a private
function AnonRoute({ component: Component, isLoggedIn, ...rest}) {
  
  return(

    <Route
      {...rest}
      render={(props) => !isLoggedIn ? <Component {...props} /> : <Redirect to="/feed"/>}
    />
  );
}

export default withAuth(AnonRoute);