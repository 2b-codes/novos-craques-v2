import React from "react";
import PropTypes from "prop-types";

import Icon from "../../quarks/icon";
import Button from "../../atoms/button";

export default class ButtonIcon extends React.Component {
	renderButton() {
		const { id, className, left, onClick, label, iconType, typeButton } = this.props;

		if(left)
			return( 
				<Button
					id={id} 
					className={`button-icon ${className}`}
					type={typeButton}
					onClick={onClick}
				>
					<Icon type={iconType} id="likeButton"/>
					<span>{label}</span>
				</Button>
			);
		else
			return (
				<Button
					id={id} 
					className={`button-icon ${className}`}
					type={typeButton}
					onClick={onClick}
				>
					<span>{label}</span>
					<Icon type={iconType} id="likeButton"/>
				</Button>
			);
	}

	render() {
		const { id, className } = this.props;
		return(this.renderButton());
	}
}

ButtonIcon.PropTypes={
	label: PropTypes.string.isRequired,
	iconType: PropTypes.string.isRequired,
	typeButton: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	left: PropTypes.bool
};
