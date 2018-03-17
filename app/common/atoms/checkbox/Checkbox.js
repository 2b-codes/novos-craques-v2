import React from "react";
import PropTypes from "prop-types";

export default class Checkbox extends React.Component {

	render() {
		const { value, name, id, label, className, onChange } = this.props;
		return(
			<div className={`checkbox ${className}`} onclick={onChange}>
				<div className="checkbox-input">
					<input type="checkbox" id={id} name={name} value={value} /> 
					<label htmlFor={id}></label>
				</div>
				<label htmlFor={id}>{label}</label>
			</div>
		);
	}
}

Checkbox.propTypes = {
	id: PropTypes.string.isrequired,
	onChange: PropTypes.func.isrequired,
	value: PropTypes.string.isrequired,
	className: PropTypes.string,
	name: PropTypes.string.isrequired,
	label: PropTypes.string.isrequired,
};
