import React from "react"
import "./css/search.css"

import Header from "./header"
import Footer from "./footer"
import MenuSearch from "../components/menuSearch"
import SearchBar from "../components/searchBar"
import Filters from "../components/filters"
import Cards from "../components/cards"

import { Link } from 'react-router-dom';

const Search = () =>{
    return(
        <>
            <Header/>
            
            <nav className="is-flex is-flex-direction-row">

                <div className="full baloo2 is-flex is-flex-direction-column mt-6">

                    <SearchBar/>

                    <div className="busca is-flex is-flex-direction-row ml-6">

                        <Filters/>

                        <div className="wrapper mr-6">
                        {/* fazer um for de acordo com os filtros */}
                            <Link to="/RepData"><Cards className="cardSize"
                                nome={'República Xeruléu'}
                                rua={'Pererê Paraná'} 
                                numero={666} 
                                bairro={'Na Nave'} 
                                estado={'EC'} 
                                moradores={5} 
                                rep={'r'} 
                                tipo={'fem'}
                                imagem={'https://bulma.io/images/placeholders/1280x960.png'}/> </Link>

                            <Link to="/RepData"><Cards
                                nome={'República Xeruléu'}
                                rua={'Pererê Paraná'} 
                                numero={666} 
                                bairro={'Na Nave'} 
                                estado={'EC'} 
                                moradores={5} 
                                rep={'r'} 
                                tipo={'fem'}
                                imagem={'https://bulma.io/images/placeholders/1280x960.png'}/> </Link>

                            <Link to="/RepData"><Cards
                                nome={'República Xeruléu'}
                                rua={'Pererê Paraná'} 
                                numero={666} 
                                bairro={'Na Nave'} 
                                estado={'EC'} 
                                moradores={5} 
                                rep={'r'} 
                                tipo={'fem'}
                                imagem={'https://bulma.io/images/placeholders/1280x960.png'}/> </Link>

                            <Link to="/RepData"><Cards
                                nome={'República Xeruléu'}
                                rua={'Pererê Paraná'} 
                                numero={666} 
                                bairro={'Na Nave'} 
                                estado={'EC'} 
                                moradores={5} 
                                rep={'r'} 
                                tipo={'fem'}
                                imagem={'https://bulma.io/images/placeholders/1280x960.png'}/> </Link>

                            <Link to="/RepData"><Cards
                                nome={'República Xeruléu'}
                                rua={'Pererê Paraná'} 
                                numero={666} 
                                bairro={'Na Nave'} 
                                estado={'EC'} 
                                moradores={5} 
                                rep={'r'} 
                                tipo={'fem'}
                                imagem={'https://bulma.io/images/placeholders/1280x960.png'}/> </Link>

                            
                            
                    </div>

                    </div>

                </div>
            </nav>


            <Footer/>
        </>
    )
}

export default Search 
