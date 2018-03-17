import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

import Icon from "../../quarks/icon";

export default class InputNumber extends React.Component {

	validate(e) {
		const { value } = e.target;
		let validate = true;
		value.split("").map(char => {
			if(/[0-9]/.test(char)) validate=true; 
			else {
				validate=false;
				return null;
			}
		});
		validate ? this.props.onChange(e) : e.target.value=this.props.value;
	}
	
	keyDownChange(e) {
		const{ onChange, id, value }= this.props;

		e.keyCode==38 ? onChange({target: {id, value: parseInt(value || 0) + 1}}): null;
		e.keyCode==40 ? onChange({target: {id, value: parseInt(value || 0) - 1}}): null;
	}

	render() {
		const{ id, value, className, placeholder, icon }= this.props;
		return(
			<div className={`input-number ${className}`}>
				<InputMask
					type="tel" 
					id={id} 
					value={value} 
					onChange={this.validate.bind(this)}
					placeholder={placeholder}
					onKeyDown={this.keyDownChange.bind(this)}
					 {...this.props} mask="+55 (99) 9 9999-9999" maskChar=" " 

				/> 
				{icon ? <Icon type="arrowUpDown" /> : null}
			</div>
		);
	}
}

InputNumber.propTypes = {
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string,
	placeholder: PropTypes.string
};