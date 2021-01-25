import React from 'react';
// import routes from '../App'

import hypeE from '../img/3x.gif';
import Footer from '../comps/footer';
import Header from '../comps/header';
import '../App.css';
import Peepo from '../img/widepeepoSad.png'

function page404() {
    return(
        <div className="main">
            <Header />
            
            <div className="main-content" style={{margin: "113px 0px 500px 0px", maxWidth: "1080px", backgroundColor: "black", borderRadius: "20px", color: "white"}}>
                <div className="flex-center-row" >
                    
                    <h1 style={{marginBottom: "0px"}}>404</h1>
                </div>
                <hr style={{maxWidth: "34%" ,border: "white solid", borderRadius: "20px", marginTop: "2%"}}/>
                <div className="flex-center-row" id="error-panel">
                    <h1>Sorry we didnt find the content you wanted </h1>
                    <img src={hypeE} alt="" style={{marginLeft: "10px", height: "64px"}}/>
                </div>
            </div>
            
            <Footer />  
        </div>      
    )
}

export default page404;