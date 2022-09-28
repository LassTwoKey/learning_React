import reactDom from "react-dom";
import React, { Fragment } from "react";
import styles from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
	return <div className={styles.backdrop} onClick={onClose}></div>
}

const ModalOverlay = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	);
}

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose }) => {
	return (
		<Fragment>
			{reactDom.createPortal(
				<Backdrop onClose={onClose} />,
				portalElement
			)}
			{reactDom.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
}

export default Modal;