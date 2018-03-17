import React from "react";
import PropTypes from "prop-types";

export default class InputText extends React.Component {

	render() {
		const{
			className,
			id,
			onChange,
			value,
			placeholder,
			type 
		}= this.props;

		return(
			// os ${}  concatena string,  entre as chaves é string 
			// antes do cifrão é variavel NÃO ESQUECER ASPAS INVERTIDA
			// o className do button é uma variável pois no nome pode ser alterado
			<input
				className={`input-text ${className}`} 
				id={id}
				onChange={onChange}
				value={value} 
				placeholder={placeholder}
				type={type || "text"} 
			/>
		);
	}
}

InputText.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

