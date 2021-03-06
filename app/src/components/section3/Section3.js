import React, { useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import "./Section3.css";

import InputField from "../input-field/InputField";
import Banner from "../banner/Banner";
import { ReactComponent as PrizeImg } from "../../assets/prize.svg";

const Section3 = () => {
	const phoneMsg = useRef("");
	const postnrMsg = useRef("");

	// const {
	// 	register,

	// 	handleSubmit,
	// } = useForm();

	const methods = useForm();
	const {
		register,
		formState: { errors },
	} = methods;

	const onSubmit = (data) => {
		console.log(data);
		if (
			data.name === "" &&
			data.email === "" &&
			data.phone === "" &&
			data.city === "" &&
			data.postnr === ""
		) {
			return false;
		}
	};

	const onlyTextAllow = (evt) => {
		//https://stackoverflow.com/questions/29823591/html-input-do-not-allow-numbers
		let key = evt.keyCode;
		if (
			!(
				key === 8 ||
				key === 32 ||
				key === 46 ||
				(key >= 35 && key <= 40) ||
				(key >= 65 && key <= 90)
			)
		) {
			evt.preventDefault();
		}
	};

	const checkNumbers = (e) => {
		let charCode = e.which ? e.which : e.keyCode;

		if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57))
			if (e.target.name === "phone") {
				phoneMsg.current.textContent = "Kun nummer i dette felt";
			} else {
				postnrMsg.current.textContent = "Kun nummer i dette felt";
			}
	};
	const onBlur = (e) => {
		let currentVal = e.target.value;
		if (
			e.target.name === "phone" &&
			(currentVal.length <= 2 || currentVal.length > 8)
		) {
			phoneMsg.current.textContent = "Mobilnummer skal være 8 cifre";
		}

		if (
			e.target.name === "postnr" &&
			(currentVal.length <= 2 || currentVal.length > 4)
		) {
			postnrMsg.current.textContent = "Postnummer skal være 4 cifre";
		}
	};

	return (
		<Banner className='section3'>
			<h2>Få 10 gode råd om transformation</h2>
			<h4>Ja tak, jeg vil gerne høre mere om digital transformation</h4>
			<div className='contents'>
				<FormProvider {...methods}>
					<form id='form' onSubmit={methods.handleSubmit(onSubmit)}>
						<InputField
							name='name'
							type='text'
							placeholder='Navn'
							label='Navn'
							{...register("name", {
								required: true,
								maxLength: 50,
								minLength: 2,
							})}
							onKeyDown={(evt) => {
								onlyTextAllow(evt);
							}}
						></InputField>
						<small className='input-msg'>
							{errors.name?.type === "required" &&
								"Navnfeltet kan ikke være tømt"}
						</small>
						<fieldset className='details-field'>
							<fieldset className='left-sec'>
								<InputField
									name='phone'
									type='tel'
									placeholder='Mobil'
									label='Mobil'
									{...register("phone", {
										required: true,
										maxLength: 8,
										pattern: /[0-9]{2}(?!$)[0-9]{2}(?!$)[0-9]{2}(?!$)[0-9]{2}/,
										min: 10000000,
										max: 99999999,
									})}
									onKeyDown={(e) => checkNumbers(e)}
									onBlur={(e) => onBlur(e)}
								></InputField>
								<small className='input-msg' ref={phoneMsg}>
									{errors.phone?.type === "required" &&
										"Mobilnummer kan ikke være tømt"}
								</small>
								<InputField
									name='post_no'
									type='number'
									placeholder='Postnr.'
									label='Postnr.'
									{...register("postnr", {
										required: true,
										maxLength: 4,
										min: 15,
										max: 9999,
									})}
									onKeyDown={(e) => checkNumbers(e)}
									onBlur={(e) => onBlur(e)}
								></InputField>
								<small className='input-msg' ref={postnrMsg}></small>
							</fieldset>
							<fieldset className='right-sec'>
								<InputField
									name='email'
									type='email'
									placeholder='E-mail'
									label='E-mail'
									{...register("email", {
										pattern:
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									})}
								></InputField>
								<small className='input-msg'>
									{/* {errors.email?.type === "required" &&
										"Emailfeltet kan ikke være tømt"} */}
								</small>
								<InputField
									name='city'
									type='text'
									placeholder='By'
									label='By'
									{...register("city", {
										required: false,
										maxLength: 50,
										minLength: 2,
									})}
									onKeyDown={(evt) => onlyTextAllow(evt)}
								></InputField>
								<small className='input-msg'></small>
							</fieldset>
						</fieldset>

						<button type='submit' className='button'>
							Ring mig op
						</button>
					</form>
				</FormProvider>
			</div>
			<div className='award'>
				<div className='svg-container'>
					<PrizeImg className='prize-img'></PrizeImg>
				</div>
				<span>Pentia vinder pris for digital innovation 2017</span>
			</div>
		</Banner>
	);
};
export default Section3;
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
