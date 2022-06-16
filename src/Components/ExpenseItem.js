import React from "react";
import "./ExpenseItem.css";
import { Icon, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const ExpenseItem = (props) => {
  return (
    <>
      <div className="expense_item">
        <h3 className="expense_item_listing">{props.name}</h3>
        <p className="expense_item_listing amount">${props.amount}</p>
        <IconButton
          className="button"
          onClick={() => props.onDelete(props.index)}
        >
          <DeleteIcon className="button" />
        </IconButton>
      </div>
    </>
  );
};

export default ExpenseItem;
