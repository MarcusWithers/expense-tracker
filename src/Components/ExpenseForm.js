import React, { useState } from "react";
import "./ExpenseForm.css";
import { TextField } from "@mui/material";
import { Icon, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const amountInputHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || amount.trim().length === 0) {
      return;
    }
    if (parseInt(amount) < 0.01) {
      return;
    }
    const expenses = {
      name: name,
      amount: parseFloat(amount),
    };

    console.log(expenses);
    props.onSubmitHandler(expenses);
    setName("");
    setAmount("");
  };
  return (
    <div>
      <form className="expense_form" onSubmit={submitHandler}>
        <TextField
          label="Name"
          value={name}
          variant="standard"
          type="text"
          onChange={nameInputHandler}
        />
        <TextField
          label="Amount"
          value={amount}
          variant="standard"
          type="number"
          step=".01"
          onChange={amountInputHandler}
        />
        <IconButton type="submit">
          <AddCircleIcon color="success" />
        </IconButton>
      </form>
    </div>
  );
};

export default ExpenseForm;
