import React from "react";
import PropTypes from "prop-types";

export default class InputCpf extends React.Component {

	extractNumbers(text) {
		var number = "";
		for(var i in text) {
			const n = text[i];
			if(parseInt(n) || parseInt(n) === 0) number += n;
		}
		return number;
	}

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

	mask(cpf) {
		if(cpf.length > 3 && cpf[3] != ".") cpf = cpf.substring(0, 3) + "." + cpf.substring(3, cpf.length);
		if(cpf.length > 7 && cpf[7] != ".") cpf = cpf.substring(0, 7) + "." + cpf.substring(7, cpf.length);
		if(cpf.length > 11 && cpf[11] != "-") cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, cpf.length);

		return cpf.substring(0, 14);var numbers = this.extractNumbers(cep);
		if(numbers.length > 5) numbers = numbers.substring(0, 5) + "-" + numbers.substring(5, numbers.length);

		return numbers.substring(0, 9);
	}

	render() {
		const{ id, value, onChange, className, placeholder } = this.props;
		return(
			<input 
				type="tel"
				value={this.mask(value)}
				id={id}
				className={`input-cpf ${className}`}
				onChange={this.validate.bind(this)}
				placeholder={placeholder}
				maxLength="14"
			/>
		);
	}
}

InputCpf.propTypes = {
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string,
	placeholder: PropTypes.string
};