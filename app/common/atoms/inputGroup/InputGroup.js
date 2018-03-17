import React from "react";
import PropTypes from "prop-types";

export default class InputGroup extends React.Component {

	render() {
		const { children, label, className, id } = this.props;
		return(
			<div className={`input-group ${className}`}>
				<label className="label-input-group" htmlFor={id}>{label}</label>
				<div className="input-group-children">
					{children}
				</div>
			</div>
		);
	}
}

InputGroup.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.isRequired
};
