import React from "react";
import PropTypes from "prop-types";

export default class NumberLikes extends React.Component {

	render() {
		const { number, className } = this.props;
		return(
			<div className={`number-likes ${className}`}>
				<span>{`${number} `}</span>
				<label>Curtidas</label>
			</div>
		);
	}
}

NumberLikes.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.isRequired
};
