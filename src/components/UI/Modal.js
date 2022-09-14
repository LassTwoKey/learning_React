import React from 'react';
import Button from './Button';
import styles from "./Modal.module.scss";

function Modal({ headerText, text, closeModal }) {
	const clickButtonHandler = () => {
		closeModal();
	}
	return (
		<div className={styles.modal}>
			<div className={styles.modal_header}>{headerText}</div>
			<div className={styles.modal_cont}>
				<div className={styles.modal_text}>{text}</div>
				<div className={styles.modal_bottom}>
					<Button onClick={clickButtonHandler} >Okay</Button>
				</div>
			</div>
		</div>
	);
}

export default Modal;