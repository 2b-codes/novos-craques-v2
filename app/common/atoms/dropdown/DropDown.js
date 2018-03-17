import React from "react";
import PropTypes from "prop-types";

import Icon from "../../quarks/icon";

export default class DropDown extends React.Component {

	constructor(props){
		super(props);
		this.state={
			isOpen: false,
			item: -1
		};
	}
	clickAction(e, value) {
		const a = e.querySelector(`#${value}`).focus();
	}

	renderItems() {
		const { options, id, onChange } = this.props;
		const { item } = this.state;
		return options.map((option, i) =>
			<li 
				key={option.id}
				className={`option ${item == i ? "selected" : "" }`}
				id={id}
				value={option.id}
				onClick={() => onChange({target: {id, value: option}})}
			>
				{option.label}
			</li>
		);
	}

	renderList() {
		return (
			<div className="listOptions">
				<ul className="list">
					{this.renderItems()}
				</ul>
			</div>
		);
	}

	openDropDown() {
		return this.state.isOpen ? this.renderList() : null;
	}

	focus() {
		let { isOpen } = this.state;
		isOpen = !isOpen;
		this.setState({isOpen});
	}

	keyDownChange(e) {
		const{ onChange, id, options }= this.props;
		const { item } = this.state;
		if(e.keyCode==38 && item>0) this.setState({item: item-1});
		if(e.keyCode==40 && item<options.length-1) this.setState({item: item+1});
		if(e.keyCode==13 && item>=0 && item<options.length-1) onChange({target: {id, value: options[item]}});

	}

	render(){
		const { className, id, onSelect, value, label } =this.props;
		const { isOpen } = this.state;
		return(
			<div className={"dropdown"}>
				<div className="select" onClick={e => {document.querySelector(`#${id}`).focus();}}>
					<input
						type="text" 
						readOnly 
						onFocus={this.focus.bind(this)} 
						onKeyDown={this.keyDownChange.bind(this)}
						value={value.label}
						id={id}
						onCLick={(e)=> e.stopPropagation()}
						onBlur={() => setTimeout(this.focus.bind(this), 150)}
					/>
					<Icon type="arrowBold"/>
				</div>
				{this.openDropDown()}

			</div>
		);
	}

}

DropDown.PropTypes={
	className: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	onSelect: PropTypes.func,
	value: PropTypes.object,
	onChange: PropTypes.func,
	options:  PropTypes.array,
};

