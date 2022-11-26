import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Mealtem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			setIsLoading(true);
			const response = await fetch('https://test-project228-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

			if (!response.ok) {
				throw new Error('something went wrong!');
			}

			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					description: responseData[key].description,
					name: responseData[key].name,
					price: responseData[key].price
				});
			}
			setMeals(loadedMeals);
			setIsLoading(false);
		};

		fetchMeals().catch(error => {
			setIsLoading(false);
			setError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={styles.mealsLoading}>
				<p>Loading ...</p>
			</section>
		)
	}
	if (error) {
		return (
			<section className={styles.mealsError}>
				<p>{error}</p>
			</section>
		)
	}

	const mealsList = meals.map(meal => {
		return <Mealtem
			key={meal.id}
			meal={{
				id: meal.id,
				name: meal.name,
				description: meal.description,
				price: meal.price
			}}
		/>;
	});
	return (
		<section className={styles.meals}>
			<Card>
				<ul>
					{mealsList}
				</ul>
			</Card>
		</section>
	);
}

export default AvailableMeals;