import React from "react";
import PropTypes from "prop-types";

import Subtitle from "../../atoms/subtitle";
import Picture from "../../atoms/picture";

export default class CardMotivation extends React.Component {

	render() {
		const { className, src, onClick, text, subtitle } = this.props;
		return(
			<div className={`card-motivation ${className}`}>
				<Picture 
					src={src}
					onClick={onClick}
					className={"image"}
					id={"motivation-image"}
				/>
				<div className="card-texts">
					<Subtitle
						children={subtitle}
						className={"subtitle"}
						id={"cardMotivationSubtitle"}
					/>
					<p className="card-motivation-text">
						{text}
					</p>
				</div>
			</div>
		);
	}
}

CardMotivation.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
