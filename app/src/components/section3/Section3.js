import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Section3.css";

import InputField from "../input-field/InputField";
import Banner from "../banner/Banner";
import { ReactComponent as PrizeImg } from "../../assets/prize.svg";

export default function Section3() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const validate = (data) => {
		console.log(data);
		if (data.name) {
		}
	};

	const { onChange } = register("");
	return (
		<Banner className='section3'>
			<h2>Få 10 gode råd om transformation</h2>
			<h4>Ja tak, jeg vil gerne høre mere om digital transformation</h4>
			<div className='contents'>
				<form id='form' onSubmit={handleSubmit(validate)}>
					<InputField
						name='name'
						type='text'
						dataValidate='str'
						placeholder='Navn'
						label='Navn'
						{...register("name", {
							required: true,
							maxLength: 50,
							minLength: 2,
						})}
					></InputField>
					<small className='input-msg'>
						{errors.name?.type === "required" &&
							"Navnfeltet kan ikke være tømt"}
					</small>
					<fieldset className='details-field'>
						<fieldset className='left-sec'>
							<InputField
								name='phone_no'
								type='tel'
								dataValidate='int'
								placeholder='Mobil'
								label='Mobil'
								dataMin='10000000'
								dataMax='99999999'
								{...register("phone", {
									required: true,
									maxLength: 8,
									pattern: /[0-9]{2}(?!$)[0-9]{2}(?!$)[0-9]{2}(?!$)[0-9]{2}/,
								})}
							></InputField>
							<small className='input-msg'>
								{errors.phone?.type === "required" &&
									"Mobilnummer kan ikke være tømt"}
							</small>
							<InputField
								name='post_no'
								type='number'
								dataValidate='int'
								placeholder='Postnr.'
								label='Postnr.'
								dataMin='15'
								dataMax='100'
								{...register("postnr", {
									required: true,
									maxLength: 4,
								})}
							></InputField>
						</fieldset>
						<fieldset className='right-sec'>
							<InputField
								name='email'
								type='email'
								dataValidate='email'
								placeholder='E-mail'
								label='E-mail'
								{...register("email", {
									pattern:
										/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
							></InputField>
							<small className='input-msg'>
								{errors.email?.type === "required" &&
									"Emailfeltet kan ikke være tømt"}
							</small>
							<InputField
								name='city'
								type='text'
								dataValidate='str'
								placeholder='By'
								label='By'
								{...register("city", {
									required: false,
									maxLength: 50,
									minLength: 2,
								})}
							></InputField>
						</fieldset>
					</fieldset>

					<button type='submit' className='button'>
						Ring mig op
					</button>
				</form>
			</div>
			<div className='award'>
				<div className='svg-container'>
					<PrizeImg className='prize-img'></PrizeImg>
				</div>
				<span>Pentia vinder pris for digital innovation 2017</span>
			</div>
		</Banner>
	);
}

// const [fields, setFields] = useState({
// 	name: "",
// 	phone: "",
// 	email: "",
// 	city: "",
// 	postnr: "",
// 	formErrors: { name: "", phone: "", email: "", city: "", postnr: "" },
// 	emailValid: false,
// 	nameValid: false,
// 	phoneValid: false,
// 	cityValid: false,
// 	postnrValid: false,
// });

// const FormErrors = ({ formErrors }) => (
// 	<div className='formErrors'>
// 		{formErrors
// 			? Object.keys(formErrors).map((fieldName, i) => {
// 					if (formErrors[fieldName].length > 0) {
// 						return (
// 							<p key={i}>
// 								{fieldName} {formErrors[fieldName]}
// 							</p>
// 						);
// 					} else {
// 						return "";
// 					}
// 			  })
// 			: null}
// 	</div>
// );

// const handleChange = (evt) => {
// 	const val = evt.target.value;
// 	const attribute = evt.target.getAttribute("data-validate");
// 	const fieldName = evt.target.name;

// 	setFields({ [fieldName]: val });
// 	handleValidation(fieldName, val);
// };

// const handleValidation = (fieldName, value) => {
// 	let fieldValidationErrors = fields.formErrors;
// 	let emailValid = fields.emailValid;
// 	let nameValid = fields.nameValid;
// 	let phoneValid = fields.phoneValid;
// 	let cityValid = fields.cityValid;
// 	let postnrValid = fields.postnrValid;

// 	switch (fieldName) {
// 		case "email":
// 			const re =
// 				/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// 			emailValid = value.match(re);
// 			fieldValidationErrors.email = emailValid ? "" : " is invalid";
// 			break;
// 		case "name":
// 			nameValid = value.length >= 6;
// 			fieldValidationErrors.str = nameValid ? "" : " is too short";
// 			break;
// 		case "phone":
// 			phoneValid = value.length >= 6;
// 			fieldValidationErrors.phone = phoneValid ? "" : " is too short";
// 			break;
// 		case "city":
// 			cityValid = value.length >= 2;
// 			fieldValidationErrors.city = cityValid ? "" : " is too short";
// 			break;
// 		case "postnr":
// 			postnrValid = value.length === 4;
// 			fieldValidationErrors.city = postnrValid ? "" : " is invalid";
// 			break;
// 		default:
// 			break;
// 	}
// 	setFields({
// 		formErrors: fieldValidationErrors,
// 		emailValid: emailValid,
// 		nameValid: nameValid,
// 		phoneValid: phoneValid,
// 		cityValid: cityValid,
// 		postnrValid: postnrValid,
// 	});
// 	validateForm();
// };
// const validateForm = () => {
// 	setFields({
// 		formValid:
// 			fields.emailValid &&
// 			fields.nameValid &&
// 			fields.phoneValid &&
// 			fields.cityValid &&
// 			fields.postnrValid,
// 	});
// };
