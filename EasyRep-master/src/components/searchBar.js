import React from "react";
import "../views/css/home.css"
import "./modal"

import Filters from "./filters"

const SearchBar = () =>{

    const closeAndOpenModal =() =>{
        document.querySelector('.modal').classList.toggle('is-active');
    }

    return(
        <>
            <nav className="is-flex is-justify-content-center is-align-content-center baloo2 is-flex-direction-column ml-6">
                <div className="busca is-flex is-flex-direction-row">

                    <div className="field is-grouped">
                        <div className="searchBar field">
                            <div className="control">
                                <input className="input baloo2" type="text" placeholder="Digite o nomde da cidade ou da república"/>
                            </div>
                        </div>

                        <div className="control ">
                            <button className=" baloo2 searchButton button is-link" style={{background: "#6E2594", color: "#F6F6F6"}}>BUSCAR</button>
                        </div>

                    </div>

                </div>

            </nav>
        </>
    )
}

export default SearchBar