import React from "react"
import "./css/home.css"
import './css/signUp.css'

import Header from './header'
import Footer from './footer'
import HorizontalLinearStepper from '../components/stepper'

const SignUp = () => {
    return(
        <>
            <Header/>

            <div className='conteudo is-flex is-justify-itens-center'>
                <HorizontalLinearStepper/>
            </div>

            <Footer/>
        </>
    )
}

export default SignUp

