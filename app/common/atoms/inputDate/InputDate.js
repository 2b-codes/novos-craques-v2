import React from "react";
import PropTypes from "prop-types";

import Datetime from "react-datetime";
import Icon from "../../quarks/icon";

export default class InputDate extends React.Component {

	

	render() {
		const{
			onChange, //Normal
			value, //Normal
			className, //Normal
			defaultValue, //Valor que estará como padrão, pode colocar um new Date()
			placeholder, //Normal
			dateFormat, //Pode ser MM/YYY para apenas mês e ano ou YYYY para apenas ano
			noInput, //Não postrar o input
			noTime, //Não aceitar Hora
			noCloseOnSelect, //Não fechar depois de clicar
			noCloseOnTab, //Não fechar qaundo apertar tab
			noOpenFocus,//Não abrir quando focar no input
			onFocus,//Função para fazer algo no facus
			viewMode,// "day", "year" e etc..
			open,//Mostrar já aberto(true), ou mostrar apenas quando dar focus no input(false)
			id

		}=this.props;

		const dateProps = { 
			placeholder: "DD/MM/YYYY",
			dateFormat: dateFormat || "DD/MM/YYYY",
			timeFormat: !noTime,
			onChange,
			value,
			locale: "pt-BR",
			closeOnSelect: !noCloseOnSelect ,
			closeOnTab: !noCloseOnTab,
			defaultValue,
			input: !noInput,
			openFocus: !noOpenFocus,
			onFocus: onFocus,
			viewMode,
			open: open,
		};
		const input = noInput ? {className: `input-date -noInput ${className}`, id: {id}} : null;
		return(
			<div className={input ? null : `input-date  ${className}`}>
				<Datetime { ...dateProps } {...input}/>
				{ input ? null :<Icon type="calendar" className="IconDangercalendar" />}
			</div>
		);
	}
}

InputDate.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.func,
	className: PropTypes.string
};