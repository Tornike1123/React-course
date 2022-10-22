import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = () => {
	return (
		<div className="new-expense">
			<ExpenseForm />
		</div>
	);
};

export default NewExpenses;
