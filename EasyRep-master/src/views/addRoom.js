import React from "react"
import "./css/home.css"
import './css/repProfile.css'
import './css/rooms.css'

import Header from './header'
import Footer from './footer'
import RepMenu from "../components/menuRep"

import { Link } from 'react-router-dom';

const AddRoom = () => {
    return(
        <>
            <Header/>

            <nav className="navbar baloo2">

            <RepMenu/>

            <div className="baloo2 is-flex is-flex-direction-column is-align-itens-center is-justify-content-center conteudo mt-5">

                <h1 className="">Cadastrar Quarto</h1> {/* ADICIONAR BORDA E TAMANHO */}

                <div className="field"> 
                        <div className="control">
                            <input className="input is-medium" type="text" placeholder="Nome do quarto"/>
                        </div>
                </div>

                {/* TAMANHO E VALOR */}
                <div className="is-flex is-flex-direction-row is-justify-content-center">
                    <div className="field is-flex-grow-1 mr-1"> 
                        <div className="control">
                            <input className="input is-medium" type="text" placeholder="tamanho do quarto"/>
                        </div>
                    </div>

                    <div className="field is-flex-grow-1 ml-1"> 
                        <div className="control ">
                            <input className="input is-medium" type="text" placeholder="valor do aluguel"/>
                        </div>
                    </div>
                </div>

                {/* NÚMERO DE MORADORES E  VAGAS DISPONÍVEIS*/}
                <div className="is-flex is-flex-direction-row is-justify-content-center">
                    <div className="field is-flex-grow-1 mr-1"> 
                        <div className="control">
                            <input className="input is-medium" type="text" placeholder="número de moradores"/>
                        </div>
                    </div>

                    <div className="field is-flex-grow-1 ml-1"> 
                        <div className="control ">
                            <input className="input is-medium" type="text" placeholder="vagas disponíveis"/>
                        </div>
                    </div>
                </div>
                
                {/* RADIO BUTTONS */}
                <div className="is-flex is-flex-direction-row is-size-5 mt-3">  
                    <div className="field is-flex-grow-1">
                        <label>É suíte?</label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question1"/>
                                SIM
                            </label>
                            <label className="radio">
                                <input type="radio" name="question1"/>
                                NÃO
                            </label>
                            </div>
                        </div>

                    <div className="field is-flex-grow-1">
                        <label>É mobiliado?</label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question2"/>
                                SIM
                            </label>
                            <label className="radio">
                                <input type="radio" name="question2"/>
                                NÃO
                            </label>
                        </div>
                    </div>

                </div>

                {/* INPUT FOTO */}
                {/* alterar para múltiplas fotos */}
                <div className="file is-light mt-2">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume"/>
                        <span className="file-cta">
                        <span className="file-icon">
                            <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                            Selecione uma foto…
                        </span>
                        </span>
                    </label>
                </div>
                
                <Link to="/Rooms" className="is-flex is-justify-content-center">
                    <button className="button is-white"
                            style={{background: "#fec601", color: "#F6F6F6"}}>
                                SALVAR
                    </button>
                </Link>
            </div>

            </nav>

            <Footer/>
        </>
    )
}

export default AddRoom;