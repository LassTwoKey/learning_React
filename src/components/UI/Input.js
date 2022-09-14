import React from 'react';
import "./Input.scss";

const Input = React.forwardRef(({ labelName, type }, ref) => {
	return (
		<label className='input-item'>
			<span>{labelName}</span>
			<input ref={ref} type={type} />
		</label>
	)
});

export default Input;
