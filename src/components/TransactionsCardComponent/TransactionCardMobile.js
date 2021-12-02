import React from "react";

import { FaShoppingBasket } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io";

const TransactionCardMobile = ({ data, length }) => {
  const timestampToDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "2px",
        border: "1px solid rgba(130, 130, 130, 0.5)",
        borderRadius: "10px",
        margin: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "40px",
          height: "inherit",
          padding: "0 10px",
          backgroundColor:
            data?.transactionType === "charge" ? "red" : "rgb(0, 180, 0)",
          color: "white",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          fontSize: "1.8rem",
        }}
      >
        {data?.transactionType === "charge" ? (
          <FaShoppingBasket />
        ) : (
          <BsCurrencyExchange />
        )}
      </div>
      <div
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            margin: "0",
            padding: "0",
          }}
        >
          {`${length - data?.id + 1}. ${data?.vendor}`}
        </p>
        <span
          style={{
            fontSize: "0.85rem",
          }}
        >
          {(data?.address + "").length > 25
            ? (data.address + "").slice(0, 25) + "..."
            : data.address}
        </span>
        <p style={{ padding: "0", margin: "0", fontSize: "0.8rem" }}>
          <span style={{ fontWeight: "bold" }}>Date:</span>
          {` ${timestampToDate(data?.timestamp)}`}
        </p>
      </div>
      <div
        style={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: 0,
            color:
              data?.transactionType === "charge" ? "red" : "rgb(0, 180, 0)",
          }}
        >
          {`${data?.transactionType === "charge" ? "-" : "+"} ${data?.amount}€`}
        </p>
        <em style={{ fontWeight: "bold", fontSize: "0.9rem", margin: "auto" }}>
          Balance
        </em>
        <em style={{ margin: "auto", padding: 0, fontSize: "0.8rem" }}>
          {data?.balance}€
        </em>
      </div>
    </div>
  );
};

export default TransactionCardMobile;
