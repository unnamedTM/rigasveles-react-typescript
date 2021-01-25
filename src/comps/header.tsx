import React from 'react'
import { ReactComponent as Brainz } from '../img/brainz.svg';
import { Link } from "react-router-dom";
function Header(props:any) {
    return(
        <header className="header">
            <div className="header-limiter">
                <Link to="/">
                    <Brainz className="logo" id="flip" style={{height: "inherit",width: "initial"}}/>
                </Link>
                <h1>{props.title}</h1>
                <Brainz className="logo" id="hidden" />
            </div>
        </header>
    )
}


export default Header;