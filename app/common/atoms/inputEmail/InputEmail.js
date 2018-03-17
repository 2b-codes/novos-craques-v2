import React from "react";
import PropTypes from "prop-types";

export default class InputEmail extends React.Component {

	render() {
		const{ className, onChange, value, id, placeholder } = this.props;
		return(
			<input
				type="email"
				className={`input-mail ${className}`}
				onChange={onChange}
				value={value}
				id={id}
				placeholder={placeholder}
			/>
		);
	}
}

InputEmail.propTypes = {

	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};