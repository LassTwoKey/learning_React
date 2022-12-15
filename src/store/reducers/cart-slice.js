import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
	items: [],
	totalQuantity: 0,
	totalAmount: 0,
	changed: false
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
			state.totalAmount = action.payload.totalAmount;
		},
		addItemToCart(state, action) {
			const newitem = action.payload;

			const existingItem = state.items.find(item => item.id === newitem.id);

			state.totalQuantity++;
			state.totalAmount += newitem.price;
			state.changed = true;

			if (!existingItem) {
				state.items.push({
					id: newitem.id,
					price: newitem.price,
					quantity: 1,
					title: newitem.title,
					totalPrice: newitem.price,
					name: newitem.name
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newitem.price;
			}
		},
		removeItemToCart(state, action) {
			const id = action.payload;

			const existingItem = state.items.find(item => item.id === id);

			state.totalQuantity--;
			state.totalAmount -= existingItem.price;
			state.changed = true;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		}
	}
});

export const { replaceCart, addItemToCart, removeItemToCart } = cartSlice.actions;

export default cartSlice.reducer;