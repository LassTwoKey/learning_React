import React from 'react';
import styles from "./Button.module.scss";

function Button({ children, className }) {
	const classes = `${styles.button} ${className}`;
	return <button className={classes}>{children}</button>
}

export default Button;