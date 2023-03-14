import React from "react"
import "./modal.js"
import "./login.css"
import { Link } from 'react-router-dom';


const Login = (props) => {

    return(
        <>
            <div id="login" className="modal">
                <div className="modal-background"></div>

                <div className="modal-content baloo2">
                    <div className="box">
                        <div className="is-flex is-justify-content-end">
                            <button className="delete" aria-label="close" onClick={props.open} ></button>
                        </div>
                        <div className="is-flex is-flex-direction-row is-justify-content-center mt-1
                        3mb-5"
                             style={{color: "#6E2594"}}>

                                <p className="has-text-weight-bold">LOGIN</p>
                        </div>
                    
                        <div className="field">
                            <p className="control">
                                <input className="input" type="email" placeholder="Email"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <input className="input" type="password" placeholder="Password"/>
                            </p>
                        </div>
                        <div className="is-flex is-justify-content-center is-flex-direction-column">
                            <Link to="/RepProfile">
                                <button className="button is-white baloo2 has-text-weight-bold buttonEntrar mt-3"  
                                        style={{background: "#fec601", color: "#4e4e4e"}}>
                                            ENTRAR  
                                </button>
                            </Link>
                            <div className="navbar-item baloo2 is-justify-content-end">
                                <h2 className="" style={{color: "#4E4E4E"}}>esqueci minha senha</h2>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

