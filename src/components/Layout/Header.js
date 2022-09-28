import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg"

const Header = ({ onShowCart }) => {
	return (
		<Fragment>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={onShowCart} />
			</header>
			<div className={styles['main-image']}>
				<img src={mealsImage} alt="delicios" />
			</div>
		</Fragment>
	);
}

export default Header;
