import React from "react"
import 'react-slideshow-image/dist/styles.css'
import './css/repData.css'

import Header from "./header"
import Footer from "./footer"
import Slideshow from "../components/slideshow";

import { Link } from 'react-router-dom';

const Room = () =>{
    return(
        <>
            <Header/>
            
            <div className="breadcrumb mt-4 ml-6" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/Search">Busca</a></li>
                    <li><a href="/RepData">Nome da República</a></li>
                    <li><a href="/SpareRooms">Vagas</a></li>
                    <li className="is-active"><a href="#" aria-current="page">Nome da Vaga</a></li>
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
                        <p>Suíte Individual</p>
                        <table className="ml-4 mt-3">
                            <tbody>
                            <tr>
                                <td>Tamanho</td>
                                <td>10m²</td>
                            </tr>
                            <tr>
                                <td>Tipo</td>
                                <td>Individual</td>
                            </tr>
                            <tr>
                                <td>Aluguel</td>
                                <td>500,00</td>
                            </tr>
                            <tr>
                                <td>Mobiliado</td>
                                <td>Sim</td>
                            </tr>
                            <tr>
                                <td>Suíte</td>
                                <td>Sim</td>
                            </tr>
                            {/* Se for compartilhado */}
                            {/* <tr>
                                <td>Número de Moradores</td>
                                <td>5</td>
                            </tr> */}
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

export default Room