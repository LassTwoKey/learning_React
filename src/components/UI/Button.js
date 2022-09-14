import React from 'react';
import styles from "./Button.module.scss";

function Button({ children, className, type, onClick }) {
	const classes = `${styles.button} ${className}`;
	return <button type={type || 'button'} onClick={onClick} className={classes}>{children}</button>
}

export default Button;