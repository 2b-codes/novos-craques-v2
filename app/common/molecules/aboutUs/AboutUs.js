import React from "react";
import PropTypes from "prop-types";

import Subtitle from "../../atoms/subtitle";

export default class AboutUs extends React.Component {

	render() {
		const { className, id, subtitle, text, value } = this.props;
		return(
			<article id="aboutUsContainer" className={`aboutUs ${ className }`}>
				<Subtitle 
					className="quem-somos"
					id="subAbout"
					value="Quem Somos"
				>
					{subtitle}
				</Subtitle>
				<p className= "text">
					{text}
				</p>
			</article>
		);
	}
}

AboutUs.PropTypes={
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};
