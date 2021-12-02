import React, { useEffect, useState } from "react";

import TransactionsCardView from "./TransactionsCardView";

const TransactionsCardLogic = ({ transactions }) => {
  const [transactionData, setTransactionData] = useState(null);

  const setPascalCase = (text) => {
    if ((text + "").includes("blue1")) {
      return "Blue1 IOT Solutions";
    }
    if ((text + "").includes("βασιλοπουλος")) {
      return "ΑΒ Βασιλοπουλος";
    }

    let tempText = (text[0] + "").toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] === " ") {
        tempText += text[i] + "";
        tempText += text[i + 1].toUpperCase() + "";
        i++;
      } else {
        tempText += text[i] + "";
      }
    }
    return tempText;
  };

  const getText = (textType, data) => {
    let stringOfData = data + "";
    let text = "";
    switch (textType) {
      case "vendor":
        if (stringOfData.includes("ΣΚΛΑΒΕΝΙΤΗΣ")) {
          text = stringOfData.slice(21, 32);
        }
        if (stringOfData.includes("ΜΑΣΟΥΤΗΣ")) {
          text = stringOfData.slice(0, 8);
          break;
        }
        if (stringOfData.includes("ΒΑΣΙΛΟΠΟΥΛΟΣ")) {
          text = stringOfData.slice(0, 15);
          break;
        }
        if (stringOfData.includes("MY MARKET")) {
          text = stringOfData.slice(0, 9);
          break;
        }
        if (stringOfData.includes("ΒΕΡΟΠΟΥΛΟΙ")) {
          text = stringOfData.slice(0, 9);
          break;
        }
        if (stringOfData.includes("ΚΡΗΤΙΚΟΣ")) {
          text = stringOfData.slice(7, 16);
          break;
        }
        if (stringOfData.includes("ΒΙΔΑΛΗΣ")) {
          text = stringOfData.slice(0, 14);
          break;
        }
        if (stringOfData.includes("ΓΑΛΑΞΙΑΣ")) {
          text = stringOfData.slice(0, 8);
          break;
        }
        if (stringOfData.includes("undefined")) {
          text = "Blue1 IOT Solutions";
          break;
        }
        break;
      case "address":
        if (stringOfData.includes("ΣΚΛΑΒΕΝΙΤΗΣ")) {
          text = stringOfData.slice(33, stringOfData.length);
        }
        if (stringOfData.includes("ΜΑΣΟΥΤΗΣ")) {
          text = stringOfData.slice(9, stringOfData.length);
          break;
        }
        if (stringOfData.includes("ΒΑΣΙΛΟΠΟΥΛΟΣ")) {
          text = stringOfData.slice(16, stringOfData.length);
          break;
        }
        if (stringOfData.includes("DELICATESSEN")) {
          text = stringOfData.slice(28, stringOfData.length);
          break;
        }
        if (stringOfData.includes("MY MARKET")) {
          text = stringOfData.slice(9, stringOfData.length);
          break;
        }
        if (stringOfData.includes("ΒΕΡΟΠΟΥΛΟΙ")) {
          text = stringOfData.slice(38, stringOfData.length);
          break;
        }
        if (stringOfData.includes("ΚΡΗΤΙΚΟΣ")) {
          text = stringOfData.slice(16, stringOfData.length);
          break;
        }
        if (stringOfData.includes("ΒΙΔΑΛΗΣ")) {
          text = stringOfData.slice(14, stringOfData.length);
          break;
        }
        if (stringOfData.includes("ΓΑΛΑΞΙΑΣ")) {
          text = stringOfData.slice(8, stringOfData.length);
          break;
        }
        if (stringOfData.includes("undefined")) {
          text = "Βυθινιας 9, Καλαμαρια";
          break;
        }
        break;
      default:
        return data;
    }
    return text.toLowerCase();
  };

  useEffect(() => {
    const data = [];

    for (let i = 0; i < transactions?.length; i++) {
      const transactionObject = {
        vendor: "",
        address: "",
        amount: 0,
        balance: 0,
        id: 0,
        timestamp: 0,
        transactionType: "",
      };
      transactionObject.vendor = setPascalCase(
        getText("vendor", transactions[i]?.vendor)
      );
      transactionObject.address = setPascalCase(
        getText("address", transactions[i]?.vendor)
      );
      transactionObject.amount = transactions[i]?.amount;
      transactionObject.balance = transactions[i]?.balance;
      transactionObject.id = transactions[i]?.id;
      transactionObject.timestamp = transactions[i]?.timestamp;
      transactionObject.transactionType = transactions[i]?.transactionType;
      data.push(transactionObject);
    }
    setTransactionData(data !== [] ? data : []);
  }, [transactions]);

  return (
    <div>
      <TransactionsCardView
        transactions={transactionData ? transactionData : null}
      />
    </div>
  );
};

export default TransactionsCardLogic;
