import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const Mealtem = ({ meal }) => {
	const ctx = useContext(CartContext);
	const resultPrice = `$${meal.price.toFixed(2)}`; // /toFixed(3)

	const addToCardHandler = (amount) => {
		ctx.addItem({
			id: meal.id,
			name: meal.name,
			amount: amount,
			price: meal.price,
		})
	}
	return (
		<li className={styles.meal}>
			<div>
				<h3>{meal.name}</h3>
				<div className={styles.description}>{meal.description}</div>
				<div className={styles.price}>{resultPrice}</div>
			</div>
			<div>
				<MealItemForm onAddToCard={addToCardHandler} id={meal.id} />
			</div>
		</li>
	);
}

export default Mealtem;