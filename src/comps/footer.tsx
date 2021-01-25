import React from 'react';
import '../pages/sources'
import { ReactComponent as Brainz } from '../img/brainz.svg';
import './image-comps.css';
import { Link } from "react-router-dom";

var sources = "https://el.wikipedia.org/wiki/%CE%A1%CE%AE%CE%B3%CE%B1%CF%82_%CE%92%CE%B5%CE%BB%CE%B5%CF%83%CF%84%CE%B9%CE%BD%CE%BB%CE%AE%CF%82"



function Footer(this: any) {

	
	return(
		<>
			<footer>
				<div style={{ maxWidth: "1080px", height: "-webkit-fill-available", width: "-webkit-fill-available"}}>
					<div style={{ height: "177px", width:"-webkit-fill-available"}}>
						<Brainz className="brainz"/>
						
					</div>
					<hr/>
					<div className="flex-space-row">
						<h1>Source code at <a id="gray-link" href="https://github.com/unnamedTM/rigasveles-react-typescript">GitHub <i className="fab fa-github-alt"></i></a></h1>
						<Link  id="gray-link" to="/sources" >
							<h1 className="language-selection">
							Πηγές
							</h1>
						</Link>
						
						<h1>Copyright℗ Unnamed Software™</h1>
					</div>
				</div>
			</footer>
		</>

		
	)
}


export default Footer;