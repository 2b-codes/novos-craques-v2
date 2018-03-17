import React from "react";
import PropTypes from "prop-types";

import Icon from "../../quarks/icon";

export default class ProgressForm extends React.Component {

	renderSteps() {
		const numberSteeps 	= this.props.numberSteeps;
		const step 					= this.props.step;
		const className			= this.props.className;
		const array 				= [];

		for(let i=0; i<numberSteeps; i++){
			if(i==step) array.push(<Icon className="selected" type="circleSelected" key={i}/>);
			else array.push(<Icon type="circle" key={i} />);
		};
		return array;
	}

	render() {
		const { className } = this.props;
		return(
			<div className={`progress-form ${className}`}>
				{this.renderSteps()}
			</div>
		);
	}
}

ProgressForm.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.isRequired
};
