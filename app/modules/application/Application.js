import React from "react";
import { connect } from "react-redux";

// import showSuccessModalAction from "../actions";
// // import AdditionalInformation from  "../../common/organisms/AdditionalInformation";
// import SignupModal from "./templates/SignupModal";
// import Loading from "../templates";
// import SuccessModal from "../templates";

class Application extends React.Component{ 

	constructor(props){
		super(props);
		this.state = {
			fullscreen: false,
		};
	}

	renderSize() {
		const width = window.screen.width;
		const height = window.screen.height;
		this.setState({fullscreen: !this.state.fullscreen});
	}


	changeColor() {
		document.querySelector("#ytplayer").style.borderColor = "#CCC";
	}
	
	render(){
		return(
			<div className={`aqui ${this.state.fullscreen ? "--fullscreen" : ""}`}>
				{/* <Loading />
				<SuccessModal /> */}
				{this.props.children}
			</div>
		);

	}
}

const MAP = (state) => {
	return {
		//MAP of props
	};
};

const ACTIONS = {
	// showSuccessModalAction,
};

export default connect(MAP, ACTIONS)(Application);
