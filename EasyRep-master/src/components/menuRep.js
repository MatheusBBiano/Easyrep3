import React from "react"
import "./../views/css/home.css"
import './../views/css/repProfile.css'

import { Link } from 'react-router-dom';


const RepMenu = () => {
    return(
        <>
            <aside className="menu">
                <p className="menu-label">
                    Geral
                </p>
                <ul className="menu-list">
                    <Link to="/RepProfile">
                        <a>Perfil</a>
                    </Link>
                </ul>
                <p className="menu-label">
                    Administração
                </p>
                <ul className="menu-list">
                    <li><a>Moradores</a></li>
                    <Link to="/Rooms">
                        <a>Gerenciar Vagas</a>
                    </Link>
                    <li>
                        <a className="menu-list">Visitas</a>
                        <ul>
                            <li><a>Calendário</a></li>
                            <li><a>Mensagens</a></li>
                        </ul>
                    </li>
                    <li><a>Financeiro</a></li>
                    <li><a>Tarefas</a></li>
                    <li><a>Excluir República</a></li>
                </ul>
            </aside>
        </>
    )
}

export default RepMenu;