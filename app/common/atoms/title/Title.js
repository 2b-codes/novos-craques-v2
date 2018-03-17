import React from "react";
import PropTypes from "prop-types";

export default class Title extends React.Component {

	renderTitle() {
		const { type, children, className, id } = this.props;
		switch(type) {
			
			case "h2": return <h2 id={id} className={`title-page ${className}`}>{children}</h2>;
			case "h3": return <h3 id={id} className={`title-page ${className}`}>{children}</h3>;
			
			default: return <h1 id={id} className={`title-page ${className}`}>{children}</h1>;
		}
	}

	render() {
		return (this.renderTitle());
	}
}


Title.propTypes = {
	children: PropTypes.string.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
};


