import React from "react";

const About = () =>{
    return(
        <>
            <div className="is-flex baloo2 is-justify-content-center pt-6">
                <div className="conteudo">
                    <h1 className="is-size-4 has-text-weight-semibold">Loren ipsum dolor sit amet, consecteur</h1>
                </div>
            </div>
            <nav className="is-flex baloo2 is-justify-content-center">
                <div className="about px-6 is-flex is-flex-direction-row">
                    <div className="info is-align-items-center is-flex is-flex-direction-column is-flex-grow-1 ">                       
                        <div className="imagem is-flex is-align-content-end">
                            <img className="imgs" src={require("./../assets/img/EasyRep_MoçaSentadaComPCnochao.png")}></img>
                        </div>
                        <h1 className="titulos is-size-4 has-text-weight-semibold py-3">Anuncie</h1>
                        <p className="texto has-text-centered is-size-5">Tá sobrando uma vaga
                                                                         <br/> aí na sua república?
                                                                         <br/> Anuncie sua vaga de 
                                                                         <br/> maneira simples e 
                                                                         <br/> descomplicada! </p>
                    </div>
                    <div className="info is-align-items-center is-flex is-flex-direction-column is-flex-grow-1 ">
                        <div className="imagem is-flex is-align-content-end">
                            <img className="imgs" src={require("./../assets/img/EasyRep_CaraSentadoComputador.png")}></img>
                        </div>
                        <h1 className="titulos is-size-4 has-text-weight-semibold py-3">Visite</h1>
                        <p className="texto has-text-centered is-size-5">Você pode agendar
                                                                        <br/>sem compromisso
                                                                        <br/>uma visita  à uma 
                                                                        <br/>república! </p>
                    </div>
                    <div className="info is-align-items-center is-flex is-flex-direction-column is-flex-grow-1">
                        <div className="imagem is-flex is-align-content-end">
                            <img className="imgs" src={require("./../assets/img/EasyRep_Sofa.png")}></img>
                        </div>
                        <h1 className="titulos is-size-4 has-text-weight-semibold py-3">Alugue</h1>
                        <p className="texto has-text-centered is-size-5">Pesquisou e achou a 
                                                                        <br/>república ideal? Eba!
                                                                        <br/>Alugue vagas de 
                                                                        <br/>forma descomplicada
                                                                        <br/>com o EasyRep ;) </p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default About;