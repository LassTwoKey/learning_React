import React, { useState } from 'react';
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
	const [usernameInput, setUsernameInput] = useState('');
	const [ageInput, setAgeInput] = useState('');

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

		if (usernameValidaton(usernameInput) && ageValidaton(ageInput)) {
			const userData = {};
			userData.username = usernameInput;
			userData.age = ageInput;
			userData.id = Math.random().toString();

			setUsernameInput('');
			setAgeInput('');
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
				<Input inputValue={setUsernameInput} value={usernameInput} type={'text'} labelName={'Username'} />
				{!isUsernameValid && (
					<>
						<Backdrop closeModal={closeModalHandler}></Backdrop>
						<Modal closeModal={closeModalHandler} headerText={'Invalid input'} text={errorValidationText.usernameError} />
					</>
				)}
				{!isAgeValid && (
					<>
						<Backdrop closeModal={closeModalHandler}></Backdrop>
						<Modal closeModal={closeModalHandler} headerText={'Invalid input'} text={errorValidationText.ageError} />
					</>
				)}
				<Input inputValue={setAgeInput} value={ageInput} type={'number'} labelName={'Age'} />
				<Button>Add User</Button>
				{(isUsernameValid && isAgeValid) && <div></div>}
			</form>
		</ContentWhiteBlock>
	);
}

export default AddUser;