import React from "react";
import PropTypes from "prop-types";

import Title from "../../atoms/title";
import Subtitle from "../../atoms/subtitle";


export default class TitleAndSubtitle extends React.Component{

	render(){
		const{id, className, value,subtitle, title }= this.props;
		return(
			<div className="titleAndSubtitle">
				<Title 
					className={ `title ${ className }` }
					value={ "teste" }
					id={ id }
					children={title}
				/>
				<div className="sub">
					<Subtitle
						children={subtitle}
						className={"subtitle"}
						
					/>
					</div>
			</div>
		);
	}
}

TitleAndSubtitle.PropTypes={
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};