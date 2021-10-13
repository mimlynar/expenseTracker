import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "../Chart/ExpenseChart";

function Expenses(props) {
  const [selection, changeSelection] = useState("2020");
  const onFilterSelection = (selection) => {
    changeSelection(selection);
  };
  const filtered = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === selection
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selection={selection}
          onFilterSelection={onFilterSelection}
        />
        <ExpenseChart expenses={filtered} />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  );
}

export default Expenses;
