import React from "react";
import PropTypes from "prop-types";

import icons from "../../assets/icons";

export default class Icon extends React.Component {

	render() {
		const { type, clickAction, id, className } = this.props;
		return (
			<svg 
				id={id} 
				onClick={clickAction} 
				className={`icon ${className} ${ clickAction ? "-pointer" : ""}`}>
				{icons[type]}
			</svg>
		);
	}
}

Icon.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	clickAction: PropTypes.func,
	id: PropTypes.string,
};