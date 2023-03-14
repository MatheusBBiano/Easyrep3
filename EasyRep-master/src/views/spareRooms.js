import React from "react"
import 'react-slideshow-image/dist/styles.css'
import './css/spareRooms.css'

import Header from "./header"
import Footer from "./footer"
// import CardProfile from "../components/cardProfile"
import Slideshow from "../components/slideshow";

import { Link } from 'react-router-dom';

const SpareRooms = () => {
    return(
        <>
            <Header/>

            <div className="breadcrumb mt-4 ml-6" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/Search">Busca</a></li>
                    <li><a href="/RepData">Nome da República</a></li>
                    <li className="is-active"><a href="#" aria-current="page">Vagas</a></li>
                </ul>
            </div>
            
            <nav className="navbar baloo2 mt-2 ml-6 mr-6">
                
                <div className="card repProf2">
                    <div className="card-content is-flex-direction-column is-align-content-center">
                        <div className="media is-flex is-justify-content-center">
                            <figure className="image is-128x128">
                                <img className= "is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"/>
                            </figure>
                        </div>

                        <div className="content is-flex-direction-column is-justify-content-center">
                            <p className="title is-4">República Um Nome Muito Grande</p>
                            <div className=" is-flex-direction-row is-justify-content-center">
                                Rua Tanana de Tal, n° 3665 <br/>
                                Bairro Jaojao - São João del Rei<br/><br/>
                                    
                                <Link to="/RepData">
                                    <button className="button"> Informações Gerais </button>
                                </Link>
                                <Link to="/SpareRooms">
                                    <button className="button"> Vagas </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>    

                <div className="rooms">
                    {/* MUDAR PRA UM FOR COM AS VAGAS DISPONÍVEIS */}
                    <div className="card room">
                        <div className="card-content is-flex-direction-column is-align-content-center">

                            {/* foto do quarto */}
                            <div className="media is-flex is-justify-content-center">
                                <figure className="image is-256x256">
                                    <img className= "" src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder image"/>
                                </figure>
                            </div>

                            {/* nome e tamanho */}
                            <div className="content is-flex is-flex-direction-column is-justify-content-center">
                                <div className="mb-3">
                                    <label>Suíte Individual</label><br/> {/* nome do quarto */}
                                    <label>9m²</label>
                                </div>

                                <Link to="/Room">
                                        <button className="button">Ver Informações</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card room">
                        <div className="card-content is-flex-direction-column is-align-content-center">

                            {/* foto do quarto */}
                            <div className="media is-flex is-justify-content-center">
                                <figure className="image is-256x256">
                                    <img className= "" src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder image"/>
                                </figure>
                            </div>

                            {/* nome e tamanho */}
                            <div className="content is-flex is-flex-direction-column is-justify-content-center">
                                <div className="mb-3">
                                    <label>Suíte Individual</label><br/> {/* nome do quarto */}
                                    <label>9m²</label>
                                </div>

                                <Link to="/Room">
                                        <button className="button">Ver Informações</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card room">
                        <div className="card-content is-flex-direction-column is-align-content-center">

                            {/* foto do quarto */}
                            <div className="media is-flex is-justify-content-center">
                                <figure className="image is-256x256">
                                    <img className= "" src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder image"/>
                                </figure>
                            </div>

                            {/* nome e tamanho */}
                            <div className="content is-flex is-flex-direction-column is-justify-content-center">
                                <div className="mb-3">
                                    <label>Suíte Individual</label><br/> {/* nome do quarto */}
                                    <label>9m²</label>
                                </div>

                                <Link to="/Room">
                                        <button className="button">Ver Informações</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </nav>

            <Footer/>
        </>
    )
}

export default SpareRooms;