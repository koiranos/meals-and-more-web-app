import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardContainer from "../CardContainer";

const UserCardView = (props) => {
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    setCardNumber(window.localStorage.getItem("currentCard"));
  }, []);

  const formatNumber = (number) => {
    let formattedText = number[0];
    for (let i = 1; i < number.length; i++) {
      i % 4 === 0
        ? (formattedText += ` ${number[i]}`)
        : (formattedText += number[i]);
    }
    return formattedText;
  };

  return (
    <CardContainer>
      <TitleText>Card Details</TitleText>
      <CardArea>
        <table style={{ margin: "auto", fontSize: "1rem" }}>
          <tbody>
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "0 10px",
                }}
              >
                Card Provider:{" "}
              </td>
              <td>Hellenic Voucher</td>
            </tr>
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "0 10px",
                }}
              >
                Card Number:{" "}
              </td>
              <td>
                {cardNumber ? formatNumber(cardNumber) : "0000 0000 0000 0000"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "0 10px",
                }}
              >
                Balance:{" "}
              </td>
              <td style={{ fontSize: "1.3rem" }}>{props.balance}</td>
            </tr>
          </tbody>
        </table>
      </CardArea>
    </CardContainer>
  );
};

const CardArea = styled.div`
  padding: 10px 0 15px 0;
`;

const TitleText = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const CardNameText = styled.p`
  font-weight: 300;
  font-size: 1rem;
`;

const CardNumberText = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

const CardBalance = styled.p`
  font-size: 1rem;
`;

const BelowElementOne = styled.div`
  z-index: 0;
  width: 70%;
  height: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgb(50, 50, 170);
  box-shadow: 0 0 20px rgba(0, 0, 0, 5);
`;
const BelowElementTwo = styled.div`
  width: 60%;
  height: 8px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgb(90, 90, 170);
  box-shadow: 0 0 20px rgba(0, 0, 0, 5);
`;

export default UserCardView;
