import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/ui-slice";
import cartSlice from "./reducers/cart-slice";

const store = configureStore({
	reducer: {
		ui: uiSlice,
		cart: cartSlice
	}
});

export default store;