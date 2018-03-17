import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";


export default class InputCep extends React.Component {

	validate(e) {
		const { value } = e.target;
		let validate = true;
		value.split("").map(char => {
			if(/[0-9]/.test(char)) validate=true; 
			else {
				validate=false;
				return null;
			}
		});
		validate ? this.props.onChange(e) : e.target.value=this.props.value;
	}

	extractNumbers(text) {
		var number = "";
		for(var i in text) {
			const n = text[i];
			if(parseInt(n) || parseInt(n) === 0) number += n;
		}
		return number;
	}

	mask(cep) {
		var numbers = this.extractNumbers(cep);
		if(numbers.length > 5) numbers = numbers.substring(0, 5) + "-" + numbers.substring(5, numbers.length);

		return numbers.substring(0, 9);
	}

	render() {

		const{ className, id,  value, onChange, placeholder }=this.props;
		return( 
			<InputMask
				type="tel"
				className={`input-cep ${className}`}
				id={id}
				value={this.mask(value)}
				onChange={this.validate.bind(this)}
				placeholder={placeholder}
				maxLength="10"
				{...this.props} mask="99999-999" maskChar=" " 
			/>
		);
	}
}
InputCep.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	className: PropTypes.string,
};