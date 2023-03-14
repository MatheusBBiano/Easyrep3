import React from "react"
import 'react-slideshow-image/dist/styles.css'
import './css/repData.css'

import Header from "./header"
import Footer from "./footer"
import Slideshow from "../components/slideshow";

import { Link } from 'react-router-dom';

const RepData = () =>{
    return(
        <>
            <Header/>

            <div className="breadcrumb mt-4 ml-6" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/Search">Busca</a></li>
                    <li className="is-active"><a href="#" aria-current="page">Nome da República</a></li>
                </ul>
            </div>
            
            <nav className="navbar baloo2 mt-4 ml-6 mr-6">

                
                <div className="card repProf">
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

                <div className="repAbout is-flex is-flex-direction-column">
                        <p>Sobre</p>
                        <table className="ml-4 mt-3">
                            <tbody>
                            <tr>
                                <td>Tipo (Sexo)</td>
                                <td>Feminina</td>
                            </tr>
                            <tr>
                                <td>Tipo</td>
                                <td>República Tradicional</td>
                            </tr>
                            <tr>
                                <td>Contas (valor médio)</td>
                                <td>500,00</td>
                            </tr>
                            <tr>
                                <td>Aceita pets?</td>
                                <td>Sim</td>
                            </tr>
                            <tr>
                                <td>Limpeza</td>
                                <td>Diarista</td>
                            </tr>
                            <tr>
                                <td>Número de Moradores</td>
                                <td>5</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                <div className="slideshow">
                    <Slideshow/>
                </div>
                
            </nav>

            <Footer/>
        </>
    )
}

export default RepData