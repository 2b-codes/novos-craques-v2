import React from "react";
import { connect } from "react-redux";

import { showSuccessModalAction } from "../../common/actions/modalActions";
import { openSignupModal } from "./actions";
import SignupModal from "./templates/SignupModal";
import HomeTemplate from "./templates/HomeTemplate";
import Informations from "./templates/Informations";

import aboutUsModel from "./assets/aboutUsModel";
import cardMotivationModel from "./assets/cardMotivationModel";
import cardDepoimentModel from "./assets/cardDepoimentModel";

import Icon from "../../common/quarks/icon";
import Button from "../../common/atoms/button";
import HomeController from "./controllers/HomeController";


class Home extends React.Component { 

	constructor(props){
		super(props);
		this.state = {
			about: false,
		};

		this.controller = new HomeController();
	}

	requestFullscreen(element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	}
	

	renderMore(){
		return (
			<div className="container">
				<Informations motivations={cardMotivationModel} aboutUs={aboutUsModel} depoiments={cardDepoimentModel} className="" />
			</div>
		);
	}
	
	render(){
		return(
			<section className="page-home">
				<SignupModal id="signup"/>
				<nav className="page-home-nav-bar">
					<img src="/assets/images/logo-x2.png"></img>
					<div className="signup-group">
						<div id="tag" className="flag"></div>
						<Button onClick={this.props.openSignupModal} className="home-signup-action-button"><Icon type="ball"/> Cadastrar-se</Button>
					</div>
				</nav>
				<HomeTemplate learnMoreAction={() =>this.setState({about: true})}/>
				{this.state.about ? this.renderMore() : null}
			</section>
		);

	}
}
export default connect(null, {openSignupModal, showSuccessModalAction})(Home);

