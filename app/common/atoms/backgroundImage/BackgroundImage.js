import React from "react";
import PropTypes from "prop-types";

export default class BackgroundImage extends React.Component {

	render() {
		const{ src, className, id }= this.props;
		return(
			<div
				style={{
					backgroundImage: `url(${src})`,
				    backgroundColor: "#cccccc",
				    backgroundRepeat: "no-repeat",
				    backgroundSize: "100% auto"
				}}
				className={`back-image ${className}`}
				id={id}
			/>
		);
	}
}

BackgroundImage.propTypes = {	
	src: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string

};