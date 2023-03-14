import React from "react"
import "./css/home.css"

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"

import HorizontalLinearStepper from '../components/stepper'

import './css/repProfile.css'

const RepChangeProfile = () => {
    return(
        <>
            <Header/>
            
            <nav className="navbar baloo2">

                <RepMenu/>
                {/* ------------------------------------- */}

                <div className='conteudoo'>
                    <HorizontalLinearStepper/>
                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default RepChangeProfile;