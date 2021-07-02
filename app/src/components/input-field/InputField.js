import React from "react";
import "./InputField.css";

function InputField(props, register) {
	return (
		<div className='input-container'>
			<input
				id={props.id}
				className={props.className + " input"}
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				pattern={props.pattern}
				maxLength={props.maxLength}
				onChange={props.onChange}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				onKeyDown={props.onKeyDown}
				register={register}
			></input>
			<label
				htmlFor={props.htmlFor}
				className={props.labelClass + " input-label"}
			>
				{props.label}
			</label>
		</div>
	);
}

export default InputField;
