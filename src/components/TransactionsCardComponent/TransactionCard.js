import React from "react";

import { FaShoppingBasket } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io";

const TransactionCard = ({ data, length }) => {
  const timestampToDate = (timestamp) => {
    // let date = Math.floor(new Date(timestamp) / 1000.0);
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
          width: "60px",
          height: "inherit",
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
          {data?.address}
        </span>
        <p style={{ padding: "0", margin: "0", fontSize: "0.8rem" }}>
          <span style={{ fontWeight: "bold" }}>Transaction Date:</span>
          {` ${timestampToDate(data?.timestamp)}`}
        </p>
      </div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: "bold",
            padding: 0,
            color:
              data?.transactionType === "charge" ? "red" : "rgb(0, 180, 0)",
          }}
        >
          {`${data?.transactionType === "charge" ? "-" : "+"} ${data?.amount}`}€
        </p>
        <p style={{ margin: "auto", padding: 0, fontSize: "0.9rem" }}>
          <span style={{ fontWeight: "bold" }}>balance:</span> {data?.balance}€
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
