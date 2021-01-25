import React from 'react';
import Footer from '../comps/footer';
import Header from '../comps/header';
import '../App.css';
import { Link} from "react-router-dom";

function RigasSources() {
    return(
        <div className="main">
            <Header />
            
            <div className="main-content" style={{margin: "0px 0px 1000px 0px"}}>
                <h1 style={{marginBottom: "0px"}}>Πηγές</h1>
                <hr style={{borderRadius: "20px", marginTop: "0px"}}/>
                <div style={{width: "1080px", textAlign: "left"}}>
                    <h1 ><li><a  href="https://rigas-wikipedia.unnamedsoftware.com">WikiPedia</a></li></h1>
                </div>
            </div>
            
            <Footer />  
        </div>      
    )
}

export default RigasSources;