import { showNotification } from "../reducers/ui-slice";
import { replaceCart } from "../reducers/cart-slice";

export const fetchCartData = () => {
	return async dispatch => {
		const fetchData = async () => {
			const response =
				await fetch("https://reduxcart-d00cc-default-rtdb.europe-west1.firebasedatabase.app/cart.json");

			if (!response.ok) {
				throw new Error("Couldn't fetch cart data!");
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(replaceCart({
				items: cartData.items || [],
				totalQuantity: cartData.totalQuantity,
				totalAmount: cartData.totalAmount
			}));
		} catch (error) {
			dispatch(
				showNotification({
					status: "error",
					title: "Error!",
					message: "Fetching cart data failed!"
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			showNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending cart data!"
			})
		);
		const sendRequest = async () => {
			const response = await fetch(
				"https://reduxcart-d00cc-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
						totalAmount: cart.totalAmount
					})
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed");
			}
		};

		try {

			await sendRequest();

			dispatch(
				showNotification({
					status: "success",
					title: "Success!",
					message: "Sent cart data successfully!"
				})
			);
		} catch (error) {
			sendCartData().catch(error => {
				dispatch(
					showNotification({
						status: "error",
						title: "Error!",
						message: "Sent cart data failed!"
					})
				);
			});
		}
	};
};

