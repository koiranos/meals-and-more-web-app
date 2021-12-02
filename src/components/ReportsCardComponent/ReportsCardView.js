import React, { useEffect, useState } from "react";

import styled from "styled-components";

import CardContainer from "../CardContainer";

const CardReportsView = (props) => (
  <CardContainer>
    <TitleText>Transaction Reports</TitleText>
    <ReportsTable>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th></th>
            <th>Expenditure Queries</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "rgba(180, 180, 180, 0.5)" }}>
            <td>1</td>
            <td>Transactions Number</td>
            <td>{props.transactionsCount.charge} entries</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Amount Spend <em>(overall)</em>
            </td>
            <td>{props.SpendOverAll}€</td>
          </tr>
          <tr style={{ backgroundColor: "rgba(180, 180, 180, 0.5)" }}>
            <td>3</td>
            <td>
              <em>
                Last{" "}
                <input
                  style={{
                    width: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    textAlign: "center",
                    fontStyle: "italic",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "20px",
                  }}
                  value={props.latestNumberValue}
                  onChange={(e) => props.setLatestNumberValue(e.target.value)}
                />{" "}
                charges
              </em>
            </td>
            <td>{props.inLastValue}€</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: "rgba(180, 180, 180, 0.5)" }}>4</td>
            <td>
              Highest Charge <em>(overall)</em>
            </td>
            <td>{props.highestCharge}€</td>
          </tr>
          <tr style={{ backgroundColor: "rgba(180, 180, 180, 0.5)" }}>
            <td>5</td>
            <td>Average Charge Amount</td>
            <td>{props.averageCharge}€</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              Charges by{" "}
              <select
                onChange={(e) => {
                  props.onChange(e);
                }}
                style={{
                  width: "120px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  textAlign: "center",
                  fontStyle: "italic",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  borderRadius: "20px",
                }}
                name="vendors"
                id="vendors"
              >
                <option
                  selected={props.selectedVendor === "guide" ? true : false}
                  value="guide"
                >
                  Vendor
                </option>
                <option
                  selected={
                    props.selectedVendor === "sklavenitis" ? true : false
                  }
                  value="sklavenitis"
                >
                  Σκλαβενιτης
                </option>
                <option
                  selected={props.selectedVendor === "masoutis" ? true : false}
                  value="masoutis"
                >
                  Μασουτης
                </option>
                <option
                  selected={props.selectedVendor === "myMarket" ? true : false}
                  value="myMarket"
                >
                  My Market
                </option>
                <option
                  selected={
                    props.selectedVendor === "vasilopoulos" ? true : false
                  }
                  value="vasilopoulos"
                >
                  Bασιλοπουλος
                </option>
                <option
                  selected={props.selectedVendor === "kritikos" ? true : false}
                  value="kritikos"
                >
                  ΚΡΗΤΙΚΟΣ
                </option>
                <option
                  selected={props.selectedVendor === "vidalis" ? true : false}
                  value="vidalis"
                >
                  Βιδαλης Market
                </option>
                <option
                  selected={props.selectedVendor === "galaxias" ? true : false}
                  value="galaxias"
                >
                  Γαλαξιας
                </option>
                <option
                  selected={
                    props.selectedVendor === "xalkiadakis" ? true : false
                  }
                  value="xalkiadakis"
                >
                  Χαλκιαδακης
                </option>
              </select>
            </td>
            <td>{props.amountByVendor}€</td>
          </tr>
        </tbody>
      </table>
    </ReportsTable>
    <hr />
    <ReportsTable>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th></th>
            <th>Income Queries</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "rgba(180, 180, 180, 0.5)" }}>
            <td>1</td>
            <td>Transactions Number</td>
            <td>{props.transactionsCount.credit} entries</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Amount Collected <em>(overall)</em>
            </td>
            <td>{props.collectedAmount}€</td>
          </tr>
        </tbody>
      </table>
    </ReportsTable>
  </CardContainer>
);

const TitleText = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ReportsTable = styled.div`
  padding: 10px;
  margin-bottom: 5px;
`;
const ReportsTable1 = styled.div`
  padding: 10px;
  margin-bottom: 5px;
`;

export default CardReportsView;
