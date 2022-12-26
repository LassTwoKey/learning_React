import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = () => {
	return <>
		<MainNavigation />
		<main className={classes.main}>
			{/* Куда вставляются рут компоненты */}
			<Outlet />
		</main>
	</>;
};

export default Layout;
