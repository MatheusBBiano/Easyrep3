import React from "react";
import "./css/home.css"

import Cards from './../components/cards'

import { Link } from 'react-router-dom';

const Rep = () =>{
    return(
        <>
            <nav className="is-flex is-justify-content-center baloo2">
                <div className="busca is-flex is-flex-direction-row">

                    <div className="field is-grouped">
                        <div className="cidade field">
                            <div className="control baloo2">
                                <input className="input" type="text" placeholder="Digite o nomde da cidade ou da república"/>
                            </div>
                        </div>

                        <div className="field baloo2">
                            <div className="control">
                                <div className="select">
                                    <select className="tipo">
                                        <option>Tipo</option>
                                        <option>Feminina</option>
                                        <option>Masculina</option>
                                        <option>Mista</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="control baloo2">
                            <Link to="Search" className="buscar button is-link" style={{background: "#6E2594", color: "#F6F6F6"}}>BUSCAR</Link>
                        </div>

                    </div>
                </div>
            </nav>

            <nav className="is-flex is-justify-content-center baloo2"> {/* MUDAR PRA PEGAR DO BD */}
                <div className="repCards px-6 is-flex is-flex-direction-row is-justify-content-center is-align-content-center">
                    <Cards nome={'República Xeruléu'}
                            rua={'Pererê Paraná'} 
                            numero={666} 
                            bairro={'Na Nave'} 
                            estado={'EC'} 
                            moradores={5} 
                            rep={'r'} 
                            tipo={'fem'}
                            imagem={'https://bulma.io/images/placeholders/1280x960.png'}/>
                    <Cards nome={'República Xablau'} 
                            rua={'Pererê Paraná'} 
                            numero={666} 
                            bairro={'Na Nave'} 
                            estado={'EC'} 
                            moradores={3} 
                            rep={'p'} 
                            tipo={'masc'}
                            imagem={'https://bulma.io/images/placeholders/1280x960.png'}/>
                    <Cards nome={'República Xulép'} 
                            rua={'Pererê Paraná'} 
                            numero={666} 
                            bairro={'Na Nave'} 
                            estado={'EC'} 
                            moradores={10} 
                            rep={'r'} 
                            tipo={'mista'}
                            imagem={'https://bulma.io/images/placeholders/1280x960.png'}/>
                </div>
            </nav>
        </>
    )
}

export default Rep