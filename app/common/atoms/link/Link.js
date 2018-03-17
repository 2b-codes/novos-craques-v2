import React from "react";
import PropTypes from "prop-types";

export default class Link extends React.Component {

	render() {
		const{ children, url, className, id } = this.props;
		return (
			<a id={id} className={`link ${className}`} href={url}>{children}</a>
		);
	}
}


Link.propTypes={
	// especifica qual o valor espera para tratativa
	children: PropTypes.string.isRequired,
	url: PropTypes.func.isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
};

