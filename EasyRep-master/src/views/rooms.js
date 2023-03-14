import React from "react"
import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"

import { Link } from 'react-router-dom';



const Rooms = () => {
    return(
        <>
            <Header/>
            
            <nav className="navbar baloo2">

                <RepMenu/>

                <div className="baloo2 quartos is-flex is-flex-direction-row is-align-itens-center is-justify-content-center conteudo mt-5">

                    {/* SUBSTITUIR COM UM FOR PEGANDO OS DADOS DAS VAGAS NO BD */}
                    <div className="card card-rooms">
                        <div className="card-content">
                            <div className="content">
                            <h2> Quarto 1 </h2>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <br/>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>*/}
                            </div>
                        </div>
                        <footer className="card-footer is-flex is-justify-content-center">
                            <Link to="/EditRoom" className="card-footer-item">
                                <a href="#" className="">Editar</a>
                            </Link>
                            <a href="#" className="card-footer-item">Excluir</a>
                        </footer>
                    </div>

                    <div className="card card-rooms">
                        <div className="card-content">
                            <div className="content">
                            <h2> Quarto 2 </h2>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <br/>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>*/}
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">Edit</a>
                            <a href="#" className="card-footer-item">Delete</a>
                        </footer>
                    </div>

                    <div className="card-rooms is-flex is-align-itens-center is-justify-content-center">
                        <Link to="/AddRoom" className="button rounded">
                            +
                        </Link>
                    </div>
                </div>
            </nav>

            <Footer/>
        </>
    )
}

export default Rooms;