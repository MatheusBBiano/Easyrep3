import React from "react"
import "./css/footer.css"

import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';



const Footer = () => {
    return(
        <>
            <nav className="footerCSS">
                <div className="left">
                    <h1 className = "baloobhaijaan logo has-text-weight-bold is-size-4 pl-5 mt-2">EASY<span>REP</span></h1>    
                </div>
                <div className="right">
                    <h3 className="icons"><FaFacebook size={30}/></h3>
                    <h3 className="icons"><FaInstagram size={30}/></h3>
                    <h3 className="icons"><FaTwitter size={30}/></h3>
                </div>
            </nav>
        </>
    )
}

export default Footer