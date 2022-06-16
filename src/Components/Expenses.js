import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import Totals from "./Totals";
import "./Expenses.css";

const Expenses = (props) => {
  let totalExpenses = 0;
  const onSubmitHandler = (formSubmissionExpenses) => {
    const expenses = {
      ...formSubmissionExpenses,
      id: Math.random(),
    };
    props.onAddExpense(expenses);
  };
  return (
    <>
      <div className="">
        <Totals expenses={props.expenses} />
      </div>
      <div className="expenses">
        <div className="expenses_total"></div>
        <div className="expense_form>">
          <div>
            <ExpenseForm
              expenses={props.expenses}
              onSubmitHandler={onSubmitHandler}
            />
          </div>

          {props.expenses.map((expense, index) => (
            <ExpenseItem
              index={index}
              id={expense.id}
              name={expense.name}
              amount={expense.amount}
              onDelete={props.onDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Expenses;
