import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
//import styles from "./Meals.module.css";
import MealsSummary from "./MealsSummary";

const Meals = () => {
	return (
		<Fragment>
			<MealsSummary />
			<AvailableMeals />
		</Fragment>
	);
}

export default Meals;