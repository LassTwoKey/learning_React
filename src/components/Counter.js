import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, decrease, toggle } from "../store/reducers/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.value);
	const show = useSelector(state => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(increment());
	};
	const decreaseHandler = () => {
		dispatch(decrease(5));
	};
	const decrementHandler = () => {
		dispatch(decrement());
	};
	const toggleCounterHandler = () => {
		dispatch(toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>--( {show ? counter : "Value"} )--</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decreaseHandler}>Decrease by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

// class Counter extends Component {
// 	incrementHandler() {
// 		this.props.increment();
// 	}
// 	decrementHandler() {
// 		this.props.decrement();
// 	}
// 	toggleCounterHandler() {

// 	}
// 	render() {
// 		return (
// 			<main className={classes.counter} >
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>-- {this.props.value} --</div>
// 				<div>
// 					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
// 					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
// 			</main>
// 		);
// 	};
// }

// const mapStateToProps = state => {
// 	return {
// 		value: state.value
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({ type: "increment" }),
// 		decrement: () => dispatch({ type: "decrement" })
// 	};
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;