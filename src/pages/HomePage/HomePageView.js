import React, { useEffect, useState } from "react";

import UserCardView from "../../components/UserCardComponent/UserCardView";
import CardReportsLogic from "../../components/ReportsCardComponent/ReportsCardLogic";
import TransactionsCardLogic from "../../components/TransactionsCardComponent/TransactionsCardLogic";
const HomePageView = (props) => {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    if (props.data != "Error") {
      setBalance(props.data?.balance);
      setTransactions(props.data?.transactions);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <UserCardView balance={balance !== null ? `${balance}€` : "00,00€"} />
          <CardReportsLogic
            transactions={transactions !== null ? transactions : null}
          />
        </div>
        <div className="col-sm-6">
          <TransactionsCardLogic
            transactions={transactions !== null ? transactions : null}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
