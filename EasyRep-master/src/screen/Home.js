import React from 'react';
import './../index.css';
import "bulma/css/bulma.min.css"

import Header from './../views/header';
import Home from './../views/home';
import Rep from './../views/rep';
import About from './../views/About';
import Footer from './../views/footer'


const home = () =>{
    return(
        <>
            <Header/>
            <Home/>
            <Rep/>
            <About/>
            <Footer/>
        </>       
    )
}

export default home;