import React, { useState, Fragment, createRef } from 'react';
import ReactDOM from 'react-dom';
import ContentWhiteBlock from './UI/ContentWhiteBlock';
import Modal from './UI/Modal';
import Backdrop from './UI/Backdrop';
import "./AddUser.scss";
import Input from './UI/Input';
import Button from './UI/Button';

function AddUser({ addHandler }) {
	const errorValidationText = {
		usernameError: 'Please enter a valid name and age (non-empty values).',
		ageError: 'Please enter a valid age (> 0).'
	}

	const nameInputRef = createRef();
	const ageInputRef = createRef();

	const [isUsernameValid, setIsUsernameValid] = useState(true);
	const [isAgeValid, setIsAgeValid] = useState(true);

	const usernameValidaton = (value) => {
		if (value.trim().length > 0) {
			setIsUsernameValid(true);
			return true;
		} else {
			setIsUsernameValid(false);
			return false;
		}
	}

	const ageValidaton = (value) => {
		if (value.trim().length > 0 && +value > 0) {
			setIsAgeValid(true);
			return true;
		} else {
			setIsAgeValid(false);
			return false;
		}
	}

	const submitDataHandler = (e) => {
		e.preventDefault();

		if (usernameValidaton(nameInputRef.current.value) && ageValidaton(ageInputRef.current.value)) {
			const userData = {};
			userData.username = nameInputRef.current.value;
			userData.age = ageInputRef.current.value;
			userData.id = Math.random().toString();

			nameInputRef.current.value = '';
			ageInputRef.current.value = '';
			addHandler(userData);
		}
	}

	const closeModalHandler = (e) => {
		setIsUsernameValid(true);
		setIsAgeValid(true);
	}
	return (
		<ContentWhiteBlock className='add-user'>
			<form onSubmit={submitDataHandler}>
				<Input ref={nameInputRef} type={'text'} labelName={'Username'} />
				<Input ref={ageInputRef} type={'number'} labelName={'Age'} />
				<Button type='submit'>Add User</Button>
				{(isUsernameValid && isAgeValid) && <div></div>}
				{!isUsernameValid && (
					<Fragment>
						{
							ReactDOM.createPortal(<Backdrop closeModal={closeModalHandler}></Backdrop>, document.getElementById('root-backdrop'))
						}
						{
							ReactDOM.createPortal(
								<Modal closeModal={closeModalHandler} headerText={'Invalid input'} text={errorValidationText.usernameError} />,
								document.getElementById('root-modal')
							)
						}
					</Fragment>
				)}
				{!isAgeValid && (
					<Fragment>
						{
							ReactDOM.createPortal(<Backdrop closeModal={closeModalHandler}></Backdrop>, document.getElementById('root-backdrop'))
						}
						{
							ReactDOM.createPortal(
								<Modal closeModal={closeModalHandler} headerText={'Invalid input'} text={errorValidationText.ageError} />,
								document.getElementById('root-modal')
							)
						}
					</Fragment>
				)}
			</form>
		</ContentWhiteBlock>
	);
}

export default AddUser;