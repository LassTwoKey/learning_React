//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import authSlice from "./reducers/authSlice";

// const ACTIONS = {
// 	increment: "increment",
// 	decrement: "decrement",
// 	decreaseByNumber: "decreasebynumber",
// 	toggle: "toggle"
// };

// const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ACTIONS.increment:
// 			return { value: state.value + 1, showCounter: state.showCounter };
// 		case ACTIONS.decrement:
// 			return { value: state.value - 1, showCounter: state.showCounter };
// 		case ACTIONS.decreaseByNumber:
// 			return { value: state.value - action.amount, showCounter: state.showCounter };
// 		case ACTIONS.toggle:
// 			return { value: state.value, showCounter: !state.showCounter };
// 		default:
// 			return state;
// 	}
// };

//const store = createStore(counterReducer);

const store = configureStore({
	reducer: {
		counter: counterSlice,
		auth: authSlice
	}
});


export default store;
