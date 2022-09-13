import React from 'react';
import styles from "./Backdrop.module.scss";

function Backdrop({ closeModal }) {

	const clickBackdropHandler = () => {
		closeModal();
	}

	return <div onClick={clickBackdropHandler} className={styles.backdrop}></div>;
}

export default Backdrop;