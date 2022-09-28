import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = ({ id, onAddToCard }) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		}
		onAddToCard(enteredAmountNumber);
	}

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<Input ref={amountInputRef} label="Amount" input={{
				id: 'amount_' + id,
				type: 'number',
				min: '1',
				max: 5,
				step: '1',
				defaultValue: '1'
			}} />
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
}

export default MealItemForm;