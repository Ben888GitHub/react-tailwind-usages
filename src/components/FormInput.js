// ./components/FormInput.jsx
import { useState } from 'react';
import React from 'react';

const inputStyle = `p-2 border border-gray-300 rounded-md text-gray-700 bg-white w-64 block`;

const FormInput = (props) => {
	const [inputType] = useState(props.type);
	const [inputValue, setInputValue] = useState('');

	function handleChange(event) {
		const newValue = event.target.value;
		setInputValue(newValue);
		if (props.onChange) props.onChange(newValue);
	}

	return (
		<>
			<span>{props?.title ? props.title : 'Untitled input'}: &nbsp; </span>
			<input
				type={inputType}
				value={inputValue}
				name="input-form"
				onChange={handleChange}
				placeholder={props?.placeholder}
				autoComplete={props?.autocomplete ? props.autocomplete : 'off'}
				className={inputStyle}
			/>
			<br />
		</>
	);
};

export default FormInput;
