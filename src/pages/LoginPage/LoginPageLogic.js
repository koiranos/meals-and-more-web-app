import React from "react";

import LoginPageView from "./LoginPageView";

const LoginPageLogic = (props) => {
  return localStorage.getItem("currentCard") ? (
    props.navigation("/card")
  ) : (
    <LoginPageView navigation={props.navigation} />
  );
};

export default LoginPageLogic;
