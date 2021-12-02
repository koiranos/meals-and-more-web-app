import React, { useState, useEffect } from "react";

import CardReportsView from "./ReportsCardView";

const CardReportsLogic = ({ transactions }) => {
  const [amountSpend, setAmountSpent] = useState(0);
  const [collectedAmount, setCollectedAmount] = useState(0);
  const [inLastValue, setInLastValue] = useState(0);
  const [latestNumber, setLatestNumber] = useState(10);
  const [selectedVendor, setSelectedVendor] = useState("");
  const [vendorQuery, setVendorQuery] = useState("");
  const [amountByVendor, setAmountByVendor] = useState("00.00");

  const getOverAllAmount = () => {
    const length = transactions?.length;
    let amountSpend = 0;
    let amountCollected = 0;
    for (let i = 0; i < length; i++) {
      if (transactions[i]?.transactionType === "charge") {
        amountSpend += transactions[i]?.amount;
      }
      if (transactions[i]?.transactionType === "credit") {
        amountCollected += transactions[i]?.amount;
      }
    }
    setAmountSpent(amountSpend);
    setCollectedAmount(amountCollected);
  };

  const getLast = () => {
    if (transactions !== null) {
      let amount = 0;
      for (let i = 0; i < latestNumber; i++) {
        if (transactions[i]?.transactionType === "charge") {
          amount += transactions[i]?.amount;
        }
      }
      setInLastValue(amount);
    }
  };

  const getHighestCharge = () => {
    let charge = 0;
    transactions?.map((transaction) => {
      if (
        transaction.transactionType === "charge" &&
        transaction.amount > charge
      ) {
        charge = transaction.amount;
      }
    });
    return charge;
  };

  const searchByVendor = () => {
    if (vendorQuery === "vendor" || vendorQuery === "") {
      setAmountByVendor("0.00");
    } else {
      let amount = 0;
      transactions?.map((transaction) => {
        let vendor = transaction.vendor + "";
        if (vendor.toLocaleLowerCase().includes(vendorQuery)) {
          amount += transaction.amount;
        }
      });

      setAmountByVendor(amount.toFixed(2) + "");
    }
  };

  const getAverageCharge = () => {
    let numberOfCharges = 0;
    transactions?.map((transaction) => {
      if (transaction.transactionType === "charge") {
        numberOfCharges++;
      }
    });
    let averageAmount = amountSpend / numberOfCharges;
    return averageAmount.toFixed(2);
  };

  const countTransactions = (transactionType) => {
    let counter = 0;
    transactions?.map((transaction) => {
      if (transaction.transactionType === transactionType) {
        counter++;
      }
    });
    return counter;
  };

  useEffect(() => {
    getOverAllAmount();
  }, [transactions]);

  useEffect(() => {
    getLast();
  });

  useEffect(() => {
    searchByVendor();
  }, [vendorQuery]);

  return (
    <CardReportsView
      transactionsCount={{
        charge: countTransactions("charge"),
        credit: countTransactions("credit"),
      }}
      SpendOverAll={amountSpend.toFixed(2)}
      latestNumberValue={latestNumber}
      setLatestNumberValue={(value) => setLatestNumber(value)}
      inLastValue={inLastValue.toFixed(2)}
      highestCharge={getHighestCharge()}
      averageCharge={getAverageCharge()}
      onChange={(e) => {
        setSelectedVendor(e.target.value);
        setVendorQuery(
          e.target.innerText.split("\n")[e.target.selectedIndex].toLowerCase()
        );
      }}
      selectedVendor={selectedVendor}
      amountByVendor={amountByVendor}
      collectedAmount={collectedAmount.toFixed(2)}
    />
  );
};

export default CardReportsLogic;
