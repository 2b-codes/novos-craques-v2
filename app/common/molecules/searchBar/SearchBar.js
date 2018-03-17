import React from "react";
import PropTypes from "prop-types";

import InputText from "../../atoms/inputText";
import Icon from "../../quarks/icon";

export default class SearchBar extends React.Component {

	render() {
		const { className, id, value, onChange, placeholder } = this.props;
		return(
			<div className={`search-bar ${className}`}>
				<Icon type="search" id="searchIcon"/>
				<InputText
					className={"search-input"}
					id={id}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
				/>
			</div>
		);
	}
}

SearchBar.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
