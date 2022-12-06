import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
	value: 0,
	showCounter: false
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		decrease(state, action) {
			state.value -= action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		}
	}
});

export const { increment, decrement, decrease, toggle } = counterSlice.actions;

export default counterSlice.reducer;