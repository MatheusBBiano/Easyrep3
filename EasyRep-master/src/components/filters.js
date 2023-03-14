import React, { useState, useEffect } from "react";

import "./../views/css/home.css"
import "./modal"
import "./login.css"
import "./filters.css"

import { Link } from 'react-router-dom';


const Filters = (props) => {

    //const [republicas, setRepublicas] = useState([]);
    //const [q, setQ] = useState("");

    //const [searchParam] = useState(["nome", "cidade"]);
    const [filterParam, setFilterParam] = useState(["All"]);


    return(
        <>
            <nav className="filtros">
                <p> Filtros </p>

                <div className="field is-flex-grow-1">
                    <label>Tipo</label>
                    <div className="control is-flex is-flex-direction-column">
                       {/* <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Feminina
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Masculina
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Mista
                        </label> */}

                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="checkbox"
                        >
                            <option value="M">Masculina</option>
                            <option value="F">Feminina</option>
                            <option value="P">Pensão</option>
                        </select>
                    
                    </div>
                </div>

                <div className="is-flex is-flex-direction-column is-justify-content-center">
                    <label>Valor</label>
                        <div className="is-flex is-flex-direction-row">
                            <div className="field price"> 
                                <div className="control">
                                    <input className="input" type="text" placeholder="MIN"/>
                                </div>
                            </div>
                            <div className="field price"> 
                                <div className="control ">
                                    <input className="input" type="text" placeholder="MAX"/>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="is-flex is-flex-direction-column is-justify-content-center">
                    <label>Tamanho (cm)</label>
                        <div className="is-flex is-flex-direction-row">
                            <div className="field price"> 
                                <div className="control">
                                    <input className="input" type="text" placeholder="MIN"/>
                                </div>
                            </div>
                            <div className="field price"> 
                                <div className="control ">
                                    <input className="input" type="text" placeholder="MAX"/>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="field is-flex-grow-1">
                    <label>Limpeza</label>
                    <div className="control is-flex is-flex-direction-column">
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Diarista
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Faxineira
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Nenhum
                        </label>
                    </div>
                </div>

                <div className="field is-flex-grow-1">
                    <label>Outros</label>
                    <div className="control is-flex is-flex-direction-column">
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Quarto Mobiliado
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                República Tradicional
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                República Não Tradicional
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="question1"/>
                                Pensão
                        </label>
                    </div>
                </div>

                <button className="button">FILTRAR</button>
            </nav>
        </>
    )
}

export default Filters

