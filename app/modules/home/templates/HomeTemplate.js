import React from "react";
import PropTypes from "prop-types";

import Icon from "../../../common/quarks/icon";
import Title from "../../../common/atoms/title";
import Subtitle from "../../../common/atoms/subtitle";

export default class HomeTemplate extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			// state values
		};
	}

	render(){
		const className = this.props.className;
		const learnMoreAction = this.props.learnMoreAction;

		return(
			<div className={`home-template ${className}`}>
				<div className="back-image">
					<div className="basic-information">
						<Title id="home-title" className="home-title">Novos Craques</Title>
						<Subtitle id="home-subtitle" className="home-subtitle">A evolução do seu sonho!</Subtitle>
					</div>
					<a href="#aboutUsContainer" className="about-us">
						<div className="more-information" onClick={learnMoreAction}>
							<div><span className="learn-more">Saiba Mais</span></div>
							<span className="learn-more"><Icon type="downArrowWhite"/></span>
						</div>
					</a>
				</div>
			</div>
		);
	}
}

HomeTemplate.PropTypes = {
	learnMoreAction: PropTypes.func.isRequired,
	className: PropTypes.string
};
