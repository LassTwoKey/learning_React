import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/reducers/ui-slice";
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const pispatch = useDispatch();
	const cartQuantity = useSelector(state => state.cart.totalQuantity);
	const toggleCartHandler = (e) => {
		pispatch(toggle());
	};
	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
