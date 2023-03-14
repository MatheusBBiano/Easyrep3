import React from "react"
import "./css/home.css"


const Home = () => {
    return(
        <>
            <nav className="is-flex is-justify-content-center baloo2">
                <div className="homeCard px-6 is-flex is-flex-direction-row is-justify-content-center is-align-content-center">
                    <div className="pl-6 is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center is-align-content-center">                       
                        <h2 className="is-size-5">Bem vindo ao <span className="has-text-weight-bold">EasyRep</span>!</h2>
                        <h1 className="has-text-weight-bold is-size-1 mb-4">BUSCANDO POR <br/>UMA REPÚBLICA?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="linha"/>
                    </div>
                    <div className="is-align-items-center is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center mt-6">
                        <img className="img1" src={require("./../assets/img/EasyRep_PoltronaEstante.png")}></img>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Home

