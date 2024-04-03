import React from "react";
import { Redirect } from "react-router-dom";

// import useAuth from '../../hooks/useAuth';

const AuthGuard = ({ children }) => {
  let user = sessionStorage.getItem("token");
  // const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //     return <Redirect to="/auth/signin" />;
  // }
  if (!user) {
    // return <Redirect to="/homepage" />;
    return <Redirect to="/auth/signin" />;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuard;
