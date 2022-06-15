import React, { useState } from "react";
import "./ExpenseForm.css";
import { TextField } from "@mui/material";
import { Icon, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
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
          variant="outlined"
          type="text"
          onChange={nameInputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          label="Amount"
          value={amount}
          variant="outlined"
          type="number"
          step=".01"
          onChange={amountInputHandler}
          InputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            step: ".01",
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
        />
        <IconButton type="submit">
          <AddCircleIcon color="success" />
        </IconButton>
      </form>
    </div>
  );
};

export default ExpenseForm;
