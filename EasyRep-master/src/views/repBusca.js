import React, { useState, useEffect } from "react";
//import Datatable from "../components/datatable";
import "./css/home.css"
//import Cards from './../components/cards'
//import Datatable from "./components/datatable";
require ("es6-promise").polyfill();
require("isomorphic-fetch");


export default function RepBusca(){
   // const [error, setError] = useState(null);
    //const [isLoaded, setIsLoaded] = useState(false);

    const [republicas, setRepublicas] = useState([]);  //items, setItems
    const [q, setQ] = useState("");
    //const [searchColumns, setSearchColumns] = useState([""])

    const [searchParam] = useState(["nome", "cidade"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    //const [filterParam2, setFilterParam2] = useState(["All"]);

    useEffect(() => {
        fetch("http://localhost:3001/republicas")
        .then((response) => response.json())
        .then(json => setRepublicas(json));
    }, []);


    function search(republicas){
        //const columns = republicas[0] && Object.keys(republicas[0]);
        return republicas.filter((republica) =>{
            if(republica.tipoInquilino === filterParam){
                return searchParam.some((newRepublica) => {
                    return (
                        republica[newRepublica].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    );
                });
                
            } else if (filterParam === "All"){
                return searchParam.some((newRepublica) => {
                    return (
                        republica[newRepublica].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    );
                });
            }

            /*if (republica.subregion === filterParam2){
                return searchParam.some((newRepublica) => {
                    return (
                        republica[newRepublica].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    );
                });
            }*/
            
        });
    }

    return(
        <div>
            <div className="search=wrapper">
                <input 
                    type="search" 
                    name="search-form" 
                    id="search-form"
                    classname="search-input"
                    placeholder="search for..."
                    value={q}
                    onChange = {(e) => setQ(e.target.value)}
                />
            </div>
            
            <div className="select">
            <select
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter Countries By Countries"
            >
                <option value="All">Filtrar pelo tipo</option>
                <option value="M">Masculina</option>
                <option value="F">Feminina</option>
                <option value="P">Pensão</option>
            </select>
            </div>


        {/* <div className="select">
            <select
                onChange={(e) => {
                setFilterParam2(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter Countries By Subregion"
            >
                <option value="All">Filter By Subregion</option>
                <option value="Northern Africa">Northern Africa</option>
                <option value="Middle Africa">Middle Africa</option>
                <option value="Western Africa">Western Africa</option>
            </select>
            </div> */}

            <ul className="card-grid">
                    {search(republicas).map((republica) => (
                        <li>
                            <article className="card" key={republica.id}>
                                {/*<div className="card-image">
                                    <img src={republica.flag} alt={republica.name} />
                    </div>*/}
                                <div className="card-content">
                                    <h2 className="card-name">{republica.nome}</h2>
                                    <ol className="card-list">
                                        <li>
                                            localização:{" "}
                                            <span>Rua: {republica.rua} N°:{republica.numero},</span>
                                            <span>Bairro:{republica.bairro}</span>
                                        </li>
                                        <li>
                                            Tipo: <span>{republica.tipoInquilino}</span>
                                        </li>
                                        <li>
                                            Regime: <span>{republica.regime}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
    );
}
