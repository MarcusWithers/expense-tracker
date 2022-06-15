import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import "./App.css";
const DUMMY_DATA = [
  {
    id: 1,
    name: "Car Bill",
    amount: 247.99,
  },
  { id: 2, name: "Groceries", amount: 175.99 },
  { id: 3, name: "Movie Theater", amount: 34.99 },
];
// Data needs to be brought up to this layer still.

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const onAddExpense = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });

    console.log(expenses);
  };

  const handleDelete = (index) => {
    setExpenses([...expenses.slice(0, index), ...expenses.slice(index + 1)]);
  };
  return (
    <div className="app">
      <h1>Expenses Tracker</h1>
      <Expenses
        expenses={expenses}
        onAddExpense={onAddExpense}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
