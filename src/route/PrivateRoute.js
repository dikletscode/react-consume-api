import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../App";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logins, setLogins] = useContext(AuthContext);
  let status = JSON.parse(localStorage.getItem("user")) || false;

  return (
    <Route
      {...rest}
      render={(props) =>
        status.logIn == true ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoute;
