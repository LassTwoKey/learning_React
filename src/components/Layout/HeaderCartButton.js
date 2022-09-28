import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
	const [btnIsHightLighted, setBtnIsHightLighted] = useState(false);

	const ctx = useContext(CartContext);
	const { items } = ctx;

	const numberOfCartitems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);


	const btnStyles = `${styles.button} ${btnIsHightLighted ? styles.bump : ''}`;

	useEffect(() => {
		if (items.length === 0) return;
		setBtnIsHightLighted(true);

		const timer = setTimeout(() => {
			setBtnIsHightLighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button onClick={onClick} className={btnStyles}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={styles.badge}>{numberOfCartitems}</span>
		</button>
	);
}

export default HeaderCartButton;