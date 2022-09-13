import React from 'react';
import styles from "./ContentWhiteBlock.module.scss";

function ContentWhiteBlock({ children, className }) {
	const classes = `${styles.block} ${className}`;
	return <div className={classes}>{children}</div>
}

export default ContentWhiteBlock;