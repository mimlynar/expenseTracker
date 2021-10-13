import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    hideFormHandler();
  };
  const [visible, changeVisible] = useState(false);

  const showFormHandler = (event) => {
    changeVisible(true);
  };

  const hideFormHandler = (event) => {
    changeVisible(false);
  };

  if (visible) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onExpenseSave={saveExpenseDataHandler}
          hideForm={hideFormHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={showFormHandler}>Add new expense</button>
    </div>
  );
};

export default NewExpense;
