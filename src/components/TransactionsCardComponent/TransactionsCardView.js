import React from "react";

import styled from "styled-components";

import CardContainer from "../CardContainer";
import TransactionCard from "./TransactionCard";
import TransactionCardMobile from "./TransactionCardMobile";

const TransactionsCardView = ({ transactions }) => {
  const getTransactions = (type) => {
    if (type === "normal") {
      return transactions?.map((transaction) => {
        return (
          <TransactionCard
            data={transaction}
            id={transaction.id}
            length={transactions.length}
          />
        );
      });
    } else {
      return transactions?.map((transaction) => {
        return (
          <TransactionCardMobile
            data={transaction}
            id={transaction.id}
            length={transactions.length}
          />
        );
      });
    }
  };

  return (
    <CardContainer>
      <div
        className="d-none d-lg-block"
        style={{
          height: "100vh",
          overflow: "scroll",
          background:
            "linear-gradient(180deg, rgba(248,26,26,0) 0%, rgba(73,73,73,1) 100%);",
        }}
      >
        {getTransactions("normal")}
      </div>
      <div
        className="d-block d-lg-none"
        style={{
          height: "100vh",
          overflow: "scroll",
          background:
            "linear-gradient(180deg, rgba(248,26,26,0) 0%, rgba(73,73,73,1) 100%);",
        }}
      >
        {getTransactions("mobile")}
      </div>
    </CardContainer>
  );
};

export default TransactionsCardView;
