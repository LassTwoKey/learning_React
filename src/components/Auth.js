import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authSlice";
import classes from "./Auth.module.css";

const Auth = () => {
	const dispatch = useDispatch();

	const [inputEmail, setInputEmail] = useState("");
	const [inputPass, setInputPass] = useState("");
	const emailChangeHandler = e => {
		setInputEmail(e.target.value);
	};
	const passChangeHandler = e => {
		setInputPass(e.target.value);
	};
	const userFormHanler = e => {
		e.preventDefault();

		const isEmailValid = inputEmail.trim() !== "";
		const isPassValid = inputEmail.trim() !== "";

		const isValid = isEmailValid && isPassValid;

		if (!isValid) {
			return;
		}

		dispatch(login());
	};
	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={userFormHanler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input type="email" onChange={emailChangeHandler} value={inputEmail} id="email" />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input type="password" onChange={passChangeHandler} value={inputPass} id="password" />
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
