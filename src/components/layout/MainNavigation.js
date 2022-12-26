import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const setActive = ({ isActive }) => isActive ? classes.active : "";

const MainNavigation = () => {
	return <header className={classes.header}>
		<div className={classes.logo}>Great Quotes</div>
		<nav className={classes.nav}>
			<ul>
				<li>
					<NavLink to="/quotes" className={setActive}>All Quotes</NavLink>
				</li>
				<li>
					<NavLink to="/new-qoute" className={setActive}>Add a Quote</NavLink>
				</li>
			</ul>
		</nav>
	</header>;
};

export default MainNavigation;
