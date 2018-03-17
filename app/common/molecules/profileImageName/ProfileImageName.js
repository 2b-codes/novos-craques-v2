import React from "react";
import PropTypes from "prop-types";

import Picture from "../../atoms/picture";

export default class ProfileImageName extends React.Component {

	render() {
		const { src, onClick, className, id, name } = this.props;
		return(
			<div className={`profile-image-name ${className}`}>
				<Picture 
					src={src} 
					onClick={onClick}
					className={"profile-picture"}
					id={"profile-picture"}
				/>
				<label className="profile-label">{name}</label>
			</div>
		);
	}
}

ProfileImageName.PropTypes={
	src: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
