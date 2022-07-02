import React, { useState, useEffect } from "react";
import Expenses from "./Components/Expenses";
import { db } from "./firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const [dbexpenses, setDbExpenses] = useState([]);
  const expensesCollectionRef = collection(db, "expenses");

  useEffect(() => {
    const getExpenses = async () => {
      const data = await getDocs(expensesCollectionRef);
      setDbExpenses(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      console.log(data);
    };

    getExpenses();
  }, []);
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
