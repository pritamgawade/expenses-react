import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, isShowForm] = useState(false);

  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    isShowForm(false);
  };

  const showExpenseFormHandler = () => {
    isShowForm(true);
  };

  const stopShowingFormHandler = () => {
    isShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={showExpenseFormHandler}>Add New Expenses</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseHandler}
          onCancel={stopShowingFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
