import React from "react"
import "./css/header.css"

import "./../components/modal"
import Login from "./../components/login"
import { Link } from 'react-router-dom';

const Header = () => {
    const closeAndOpenModal =() =>{
        document.querySelector('.modal').classList.toggle('is-active');
    }
    return(

        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <Link to="/">
                            <h1 className = "baloobhaijaan logo has-text-weight-bold is-size-3 pl-5 mt-2">EASY<span>REP</span></h1> 
                        </Link>
                           
                    </div>
                </div>

                <div className="navbar-end pr-5">
                    <div className="navbar-item baloo2">
                        <Link to="/SignUp">
                            <h2 className="has-text-weight-medium" style={{color: "#4E4E4E"}}>CADASTRE-SE</h2>
                        </Link>

                    </div>

                    <div className="linhaVertical mt-2"/>

                    <div className="navbar-item">
                        <button onClick={closeAndOpenModal} className="button js-modal-trigger is-white baloo2 has-text-weight-bold buttonLogin"  
                                data-bs-target="login" 
                                style={{background: "#fec601", color: "#F6F6F6"}}>
                                    LOGIN </button>
                    </div> 
                </div>
                
            </nav>

            <div className="is-flex is-justify-content-center">
                <div className="linhaHorizontal mt-2"/>
            </div>

            <Login open={closeAndOpenModal}/>

        </>

    )
}

export default Header