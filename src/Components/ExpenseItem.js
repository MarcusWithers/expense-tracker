import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense_item">
      <h3 className="expense_item_listing">{props.name}</h3>
      <p className="expense_item_listing amount">{props.amount}</p>
    </div>
  );
};

export default ExpenseItem;
