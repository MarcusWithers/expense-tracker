import React from "react";
import "./Totals.css";
const Totals = (props) => {
  let totalExpenses = 0;
  return (
    <div className="totals">
      {props.expenses.map((expense) => {
        totalExpenses += expense.amount;
      })}
      <p className="totals_name">Total - </p>
      <p className="totals_amount">${totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default Totals;
