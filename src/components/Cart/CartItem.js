import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemToCart } from '../../store/reducers/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
	const { id, title, quantity, total, price } = props.item;

	const dispatch = useDispatch();


	const removeItemHandler = () => {
		dispatch(removeItemToCart(id));
	};

	const addItemHandler = () => {
		dispatch(addItemToCart({
			id,
			title,
			price
		}));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeItemHandler}>-</button>
					<button onClick={addItemHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
