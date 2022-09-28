import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = ({ onClose }) => {
	const ctx = useContext(CartContext);

	const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
	const hasitems = ctx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		ctx.removeItem(id)
	}
	const cartItemAddHandler = (item) => {
		ctx.addItem({ ...item, amount: 1 });
	}

	const cartItems = <ul className={styles['cart-items']}>
		{
			ctx.items.map(item => {
				return <CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			})
		}
	</ul>;

	return (
		<Modal onClose={onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button onClick={onClose} className={styles['button--alt']}>Close</button>
				{hasitems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
}

export default Cart;