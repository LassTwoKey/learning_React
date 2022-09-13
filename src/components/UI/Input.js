import React from 'react';
import "./Input.scss";

function Input({ labelName, type, inputValue, value }) {
	const getInputHandler = (e) => {
		inputValue(e.target.value);
	}
	return (
		<label className='input-item'>
			<span>{labelName}</span>
			<input value={value} onChange={getInputHandler} type={type} />
		</label>
	);
}

export default Input;
