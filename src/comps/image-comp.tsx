import React from 'react';

import "./image-comps.css"

function CompImg1(props:any) {
	return (
		<>
		
		<div className="compimg1div">
			<img src={props.src} style={props.imgstyle} alt="Compimg1alt"/>
			
			<div>
				<h1>{props.h}</h1>
				<p>{props.p}</p>
			</div>
		</div>
		<hr style={props.hrstyle} className="bottom-hr"/>
		</>
	);
}

export default CompImg1;