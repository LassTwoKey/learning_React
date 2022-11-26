import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "../Cart/Checkout";

const Cart = ({ onClose }) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const ctx = useContext(CartContext);

	const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
	const hasitems = ctx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		ctx.removeItem(id)
	}
	const cartItemAddHandler = (item) => {
		ctx.addItem({ ...item, amount: 1 });
	}
	const orderHandler = (e) => {
		setIsCheckout(true);
	}

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);

		await fetch('https://test-project228-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
			method: 'POST',
			body: JSON.stringify({
				user: userData,
				ordereditems: ctx.items
			})
		});

		setIsSubmitting(false);
		setDidSubmit(true);
		ctx.clearCart();
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

	const modalActions = (
		<div className={styles.actions}>
			<button onClick={onClose} className={styles['button--alt']}>Close</button>
			{hasitems && <button onClick={orderHandler} className={styles.button}>Order</button>}
		</div>
	);

	const cartModalContent = <>
		{cartItems}
		<div className={styles.total} >
			<span>Total Amount</span>
			<span>{totalAmount}</span>
		</div >
		{isCheckout && <Checkout onConfirm={submitOrderHandler} onClose={onClose} />}
		{!isCheckout && modalActions}
	</>;
	const isSubmittingModalContent = <p>Sending order data...</p>;
	const didSubmitModalContent = <>
		<p>Successfully sent the order!</p>
		<div className={styles.actions}>
			<button onClick={onClose} className={styles.button}>Close</button>
		</div>
	</>;

	return (
		<Modal onClose={onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
}

export default Cart;