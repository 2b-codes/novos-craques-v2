import React from "react";
import PropTypes from "prop-types";

export default class Subtitle extends React.Component {

	renderSubtitle() {
		const { type, children, className, id } = this.props;
		switch(type) {
			
			case "h5": return <h5 id={id} className={`subtitle-page ${className}`}>{children}</h5>;
			case "h6": return <h6 id={id} className={`subtitle-page ${className}`}>{children}</h6>;
			
			default: return <h4 id={id} className={`subtitle-page ${className}`}>{children}</h4>;
		}
	}

	render() {
		return (this.renderSubtitle());
	}
}


Subtitle.propTypes={
	children: PropTypes.string.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
};


