import React, { useEffect, useState } from "react";
// 5022590003818005

import CustomInput from "../../components/CustomInput/CustomInput";
import styled from "styled-components";

import logo from "../../assets/images/logo.png";

import LoginCardContainer from "../../components/CardContainer";

const LoginPageView = (props) => {
  const [username, setUsername] = useState("");
  const [usernameOnError, setUsernameOnError] = useState(false);
  const [usernameErrorText, setUsernameErrorText] = useState("");

  const [password, setPassword] = useState("");
  const [passwordOnError, setPasswordOnError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const usernameDefaultText = "Enter your card number";
  const passwordDefaultText = "Enter card password";

  const [isCredentialsCorrect, setIsCredentialsCorrect] = useState(false);

  useEffect(() => {
    setUsernameOnError(false);
    setPasswordOnError(false);
  }, [username, password]);

  const validateCredentials = (username, password) => {
    let usernameError = false;
    let passwordError = false;
    if (username === "") {
      setUsernameOnError(true);
      setUsernameErrorText("Please enter a correct card number");
      usernameError = true;
    } else {
      if (username.length !== 16) {
        setUsernameOnError(true);
        setUsernameErrorText("Card number should be 16 digits long");
        usernameError = true;
      }
    }

    if (password === "") {
      setPasswordOnError(true);
      setPasswordErrorText("Please enter a correct Password");
      passwordError = true;
    }

    return usernameError || passwordError ? false : true;
  };

  const loginUser = () => {
    setUsernameOnError(false);
    setPasswordOnError(false);
    if (validateCredentials(username.trim(), password.trim())) {
      window.localStorage.setItem("currentCard", username);
      window.localStorage.setItem("password", password);
      return setIsCredentialsCorrect(true);
    }
    return setIsCredentialsCorrect(false);
  };

  const setDefaultText = (type) => {
    if (type === "Card Number" && !usernameOnError) {
      return usernameDefaultText;
    }
    if (type === "Card Number" && usernameOnError) {
      return usernameErrorText;
    }
    if (type === "Password" && !passwordOnError) {
      return passwordDefaultText;
    }
    if (type === "Password" && passwordOnError) {
      return passwordErrorText;
    }
  };
  return isCredentialsCorrect ? (
    props.navigation("/card")
  ) : (
    <>
      <LoginCardContainer>
        <LoginLogo src={logo} alt="meals and more logo" />
        <MainText className="text-center my-2">Sign in</MainText>
        <InputContainer className="col-md-auto mt-3">
          <form>
            <CustomInput
              inputOnError={usernameOnError}
              inputName="Card Number"
              setInput={setUsername}
              setText={setDefaultText}
              value={username}
            />
            <CustomInput
              inputOnError={passwordOnError}
              inputName="Password"
              setInput={setPassword}
              setText={setDefaultText}
              value={password}
            />
            <LoginButton
              type="button"
              className="btn btn-primary mt-2"
              onClick={() => loginUser()}
            >
              Login
            </LoginButton>
          </form>
        </InputContainer>
      </LoginCardContainer>
      <CopyrightText className="text-center mt-2">© 2021 - 2022</CopyrightText>
    </>
  );
};

const LoginContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px 40px 30px 40px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
`;

const LoginLogo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
  padding-bottom: 10px;
`;

const InputContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const InfoText = styled.small`
  text-align: left;
`;

const CopyrightText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: rgba(200, 200, 200, 0.8);
`;

const MainText = styled.p`
  font-size: 26px;
  font-weight: 300;
  color: rgba(100, 100, 100, 1);
  letter-spacing: 1px;
`;

const LoginButton = styled.button`
  width: 100%;
`;

export default LoginPageView;
