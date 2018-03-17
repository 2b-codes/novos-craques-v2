import React from "react";
import PropTypes from "prop-types";

export default class Picture extends React.Component {

	render() {
		const{ src, onClick, className, id }=this.props;
		return(
			<img 
				src={src}
				onClick={onClick}
				className={`picture ${className}`}
				id={id}
			/>
		);
	}
}

Picture.propTypes = {
	src: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};