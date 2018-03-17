import React from "react";
import PropTypes from "prop-types";

import Icon from "../../quarks/icon";

export default class Paginator extends React.Component {

	render(){
		const{ className,navigationAction, step, prevLabel, nextLabel }= this.props;
		return(
			<div className= {`paginator ${className}`}>
				
				<div className="container-prev" onClick={() => navigationAction(step -1)}> 
					{
						prevLabel ||
							[
								<Icon key={1} type="downArrow" id="seta" className="prev" />,
								<span key={2}>Lance Aneterior</span>
							]
					}
				</div>
				
				{
					nextLabel ||
					<div className="container-next"onClick={() => navigationAction(step +1)}>
						<span>Próximo Lance</span>
						<Icon type="downArrow" id="seta" className="next"/>
					</div>
				}
			</div>


		);
	}
}

Paginator.propTypes={
	className: PropTypes.string,
	navigationAction: PropTypes.func.isRequired,
};
