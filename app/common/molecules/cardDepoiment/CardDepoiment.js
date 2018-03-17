import React from "react";
import PropTypes from "prop-types";

import Picture from "../../atoms/picture";
import Subtitle from "../../atoms/subtitle";

export default class CardDepoiment extends React.Component {

	render(){
		
		const src 			= this.props.src;
		const className = this.props.className;
		const onClick 	= this.props.onClick;
		const id 				= this.props.id;
		const text 			= this.props.text;
		const subtitle 	= this.props.subtitle;
		const alt 			= this.props.alt;
		const date 			= this.props.date.date;

		return(
			<div className={`card-depoiment ${className}`}>
				<Picture
					src={src}
					onClick={onClick}
					className="image"
					alt={alt}
				/>				
				<div className="card-text">
					<Subtitle 
						className="subtitle"
						id={id}
						children={subtitle}
					/>
					<Subtitle 
						className="date"
						id={id}
						children={`data: ${date}`}
					/>
					<div className="depoiment-text">
						{text}
					</div>
				</div>
			</div>		
		);
	}
}

CardDepoiment.PropTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string.isRequired,
	children : PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	text:  PropTypes.string.isRequired,
};
