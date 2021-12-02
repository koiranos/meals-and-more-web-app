import React, { useState, useRef } from "react";

import styled from "styled-components";

const CustomInput = ({ inputOnError, inputName, setInput, setText, value }) => {
  const [fieldFocused, setFieldFocused] = useState(false);

  const inputRef = useRef();

  const handleInputName = () => {
    if (inputName?.includes(" ")) {
      let tempName = "";
      for (let i = 0; i < inputName.length; i++) {
        if (inputName[i] !== "") {
          tempName += inputName[i];
        }
      }
      return tempName;
    } else {
      return inputName;
    }
  };

  return (
    <MyInputContainer className="mb-4">
      <MyInput
        ref={inputRef}
        onClick={() => setFieldFocused(true)}
        type="text"
        aria-label={() => handleInputName()}
        aria-describedby={`${handleInputName()}-input`}
        value={value}
        onChange={(e) => setInput(e.target.value)}
        isFocused={fieldFocused}
      />
      <InfoText
        onClick={() => {
          setFieldFocused(true);
          inputRef.current.focus();
        }}
        onInputFocused={fieldFocused}
        id={`${handleInputName()}HelpBlock`}
        className={` ${inputOnError ? "text-danger" : "text-muted"}`}
      >
        {setText(inputName)}
      </InfoText>
    </MyInputContainer>
  );
};

const MyInputContainer = styled.div`
  position: relative;
`;

const InfoText = styled.span`
  z-index: 0;
  position: absolute;
  top: ${(props) => (props.onInputFocused ? "40px" : "0.48rem")};
  left: 0.2rem;
  font-size: ${(props) => (props.onInputFocused ? "12px" : "16px")};
  transition: top 0.5s ease, font-size 0.5s ease;
`;

const MyInput = styled.input`
  z-index: 500;
  width: 100%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0) !important;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    transition: border 0.5s ease, box-shadow 0.5s ease;
  }
`;

export default CustomInput;
