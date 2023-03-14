import * as React from 'react';
import Box from './../../node_modules/@mui/material/Box';
import Stepper from './../../node_modules/@mui/material/Stepper';
import Step from './../../node_modules/@mui/material/Step';
import StepLabel from './../../node_modules/@mui/material/StepLabel';
import Button from './../../node_modules/@mui/material/Button';
import Typography from './../../node_modules/@mui/material/Typography';
import { Link } from 'react-router-dom';

/*  */

//import "./home.css"
//import Header from './header'
//import Footer from './footer'
//import './signUp.css'
import {Formik, Form, Field} from 'formik';
//import* as yup from 'yup';
import Axios from "axios";

/*  */

const steps = ['Informações Gerais', 'Endereço', 'Informações Adicionais'];
const text = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const aux = 0;

export default function HorizontalLinearStepper() {

    const handleRegister = (values) => {
        
        console.log(values);
       // if(values.acessoGaragem !== 'undefined'){
          //  console.log(values);
            Axios.post("http://localhost:3001/register", {
                email: values.email,
                senha: values.senha,
                nome: values.nome,
                rua: values.rua,
                numero: values.numero,
                bairro: values.bairro,
                complemento:values.complemento,
                cidade: values.cidade,
                cep:values.cep,
                valorContas: values.valorContas, 
                aceitaPet:values.aceitaPet,
                acessoCozinha: values.acessoCozinha,
                acessoGaragem: values.acessoGaragem,
                acessoLavanderia: values.acessoLavanderia,
                regime: values.regime,
                //aceitaPet: values.aceitaPet,
                tipoInquilino: values.tipoInquilino,
                politicaLimpeza: values.politicaLimpeza,
            }).then((response) => {
            //<Link to="/RepProfile"/>
            alert(response.data.msg);
            //console.log(response.data.msg);
            });
        //}
      };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
   
 const content = (activeStep) => {
        if (activeStep === 0){
            return (
                <div className="mt-5">
                    <div className="my-3">
                        <h1 className="has-text-weight-semibold">INFORMAÇÕES GERAIS</h1>
                    </div>
                    {/* NOME */}
                        <div className="field "> 
                            <div className="control">
                                <Field name="nome" className="input is-medium" type="text" placeholder="digite o nome da república"/>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="field"> 
                            <div className="control">
                                <Field name="email" className="input is-medium" type="email" placeholder="e-mail"/>
                            </div>
                        </div>

                        {/* SENHA */}
                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div className="field is-flex-grow-1 mr-1"> 
                                <div className="control">
                                    <Field name="senha" className="input is-medium" type="password" placeholder="senha"/>
                                </div>
                            </div>

                            <div className="field is-flex-grow-1 ml-1"> 
                                <div className="control ">
                                    <Field name="senha2" className="input is-medium" type="password" placeholder="confirme a senha"/>
                                </div>
                            </div>
                        </div>
                        
                        {/* TIPO E PENSÃO */}
                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div className="field">
                                <div className="control">
                                    <div className="select is-medium">
                                        <Field as="select" name="tipoInquilino" className="tipo">
                                            <option>Tipo</option>
                                            <option value = "F">Feminina</option>
                                            <option value = "M">Masculina</option>
                                            <option value = "MT">Mista</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                                
                            <div className="field">
                                        <div className="control">
                                            <div className="select is-medium">
                                            <Field as="select" name="regime" className="tipo">
                                                    <option>Regime</option>
                                                    <option value="T">Tradicional</option>
                                                    <option value="N">Não Tradicional</option>
                                                    <option value="P">Pensão</option>
                                                </Field>
                                            </div>
                                        </div>
                            </div>


                        </div>

                        {/* INPUT FOTO */}
                        <div className="file is-light is-medium mt-2">
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
                    </div>
                );
            } else if (activeStep === 1){
                return (
                    <>
                        <div className="mt-5">
                            <div className="my-3">
                                <h1 className="has-text-weight-semibold">ENDEREÇO</h1>
                            </div>
                        </div>
                        // {/* ENDEREÇO E NÚMERO */}
                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div className="field is-flex-grow-5"> 
                                <div className="control">
                                    <Field name="rua" className="input is-medium mr-1" type="text" placeholder="endereço"/>
                                </div>
                            </div>

                            <div className="field is-flex-grow-1"> 
                                <div className="control">
                                    <Field name="numero" className="input is-medium ml-1" type="text" placeholder="número"/>
                                </div>
                            </div>
                        </div>

                        {/* BAIRRO E COMPLEMENTO */}
                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div className="field is-flex-grow-1"> 
                                <div className="control">
                                    <Field name="bairro" className="input is-medium mr-1" type="text" placeholder="bairro"/>
                                </div>
                            </div>

                            <div className="field is-flex-grow-1"> 
                                <div className="control">
                                    <Field name="complemento" className="input is-medium ml-1" type="text" placeholder="complemento"/>
                                </div>
                            </div>
                        </div>

                        {/* CIDADE E CEP */}
                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div className="field is-flex-grow-1"> 
                                <div className="control">
                                    <Field name="cidade" className="input is-medium mr-1" type="text" placeholder="cidade"/>
                                </div>
                            </div>

                            <div className="field is-flex-grow-1"> 
                                <div className="control">
                                    <Field name="cep" className="input is-medium ml-1" type="text" placeholder="cep"/>
                                </div>
                            </div>
                        </div>
                    </>
                    
                );
                
            } else {
                return (
                    <>
                        <div className="mt-5">
                            <div className="my-3">
                                <h1 className="has-text-weight-semibold">OUTRAS INFORMAÇÕES</h1>
                            </div>
                        </div>

                        {/* VALOR E LIMPEZA */}
                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div className="field is-flex-grow-1"> 
                                <div className="control">
                                    <Field name="valorContas" className="input is-medium mr-1" type="text" placeholder="Valor Médio (contas/pessoa)"/>
                                </div>
                            </div>

                            <div className="field is-flex-grow-1">
                                <div className="control">
                                    <div className="select is-medium ml-1">
                                        <Field as='select' name="politicaLimpeza" className="tipo">
                                            <option>Política de Limpeza</option>
                                            <option value="D">Diarista</option>
                                            <option value ="E">Empregada</option>
                                            <option value="X">Moradores</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RADIO BUTTONS */}
                        <div className="is-flex is-flex-direction-row is-size-5 mt-3">  
                            <div className="is-flex is-flex-direction-column is-flex-grow-1">  
                                <div className="field is-flex-grow-1">
                                    <label>há acesso à cozinha?</label>
                                    <div className="control">
                                    <label className="radio">
                                    <Field type="radio" name="acessoCozinha" value="1"/>
                                    SIM
                                    </label>
                                    <label className="radio">
                                    <Field type="radio" name="acessoCozinha" value="0"/>
                                    NÃO
                                    </label>
                                </div>
                                </div>

                                <div className="field is-flex-grow-1">
                                    <label>Há acesso à lavanderia?</label>
                                    <div className="control">
                                    <label className="radio">
                                    <Field type="radio" name="acessoLavanderia" value="1"/>
                                    SIM
                                    </label>
                                    <label className="radio">
                                    <Field type="radio" name="acessoLavanderia" value="0"/>
                                    NÃO
                                    </label>
                                </div>
                                </div>
                            </div>

                            <div className="is-flex is-flex-direction-column is-flex-grow-1 ml-3">  
                                <div className="field is-flex-grow-1">
                                    <label>Tem ou aceita pets?</label>
                                    <div className="control">
                                    <label className="radio">
                                    <Field type="radio" name="aceitaPet" value="1"/>
                                    SIM
                                    </label>
                                    <label className="radio">
                                    <Field type="radio" name="aceitaPet" value="0"/>
                                    NÃO
                                    </label>
                                </div>
                                </div>

                                <div className="field is-flex-grow-1">
                                    <label>Possui garagem?</label>
                                    <div className="control">
                                    <label className="radio">
                                    <Field type="radio" name="acessoGaragem" value="1"/>
                                    SIM
                                    </label>
                                    <label className="radio">
                                    <Field type="radio" name="acessoGaragem" value="0"/>
                                    NÃO
                                    </label>
                                </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }   
        }
    

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };

    return (
        <Formik
            initialValues={{}}
            onSubmit={handleRegister}
        >
            <Form className='login-form'>
                <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Informações Salvas Com Sucesso!
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                           <Button type="submit">Confirmar Cadastro</Button>
                    </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                    {content(activeStep)}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        >
                        Anterior
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        
                        <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Cadastrar' : 'Próximo'}
                        </Button>
                        
                    </Box>
                    </React.Fragment>
                )}
                </Box>
            </Form>
        </Formik>
    );
}

/*import * as React from 'react';
import Box from './../../node_modules/@mui/material/Box';
import Stepper from './../../node_modules/@mui/material/Stepper';
import Step from './../../node_modules/@mui/material/Step';
import StepLabel from './../../node_modules/@mui/material/StepLabel';
import Button from './../../node_modules/@mui/material/Button';
import Typography from './../../node_modules/@mui/material/Typography';
import { Link } from 'react-router-dom';

const steps = ['Informações Gerais', 'Endereço', 'Informações Adicionais'];
const text = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const aux = 0;

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  
 const content = (activeStep) => { 
        if (activeStep == 0){
            return (
                <div className="mt-5">
                    <div className="my-3">
                        <h1 className="has-text-weight-semibold">INFORMAÇÕES GERAIS</h1>
                    </div>

                   // { NOME }
                    div className="field "> 
                        <div className="control">
                            <input className="input is-medium" type="text" placeholder="digite o nome da república"/>
                        </div>
                    </div>

                    //{ EMAIL }
                    <div className="field"> 
                        <div className="control">
                            <input className="input is-medium" type="email" placeholder="e-mail"/>
                        </div>
                    </div>

                    //{ SENHA }
                    <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <div className="field is-flex-grow-1 mr-1"> 
                            <div className="control">
                                <input className="input is-medium" type="password" placeholder="senha"/>
                            </div>
                        </div>

                        <div className="field is-flex-grow-1 ml-1"> 
                            <div className="control ">
                                <input className="input is-medium" type="password" placeholder="confirme a senha"/>
                            </div>
                        </div>
                    </div>
                    
                    { TIPO E PENSÃO }
                    <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <div className="field">
                            <div className="control">
                                <div className="select is-medium">
                                    <select className="tipo">
                                        <option>Tipo</option>
                                        <option>Feminina</option>
                                        <option>Masculina</option>
                                        <option>Mista</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                            
                        <div className="field">
                                    <div className="control">
                                        <div className="select is-medium">
                                            <select className="regime">
                                                <option>Regime</option>
                                                <option>Tradicional</option>
                                                <option>Não Tradicional</option>
                                                <option>Pensão</option>
                                            </select>
                                        </div>
                                    </div>
                        </div>


                    </div>

                    //{ INPUT FOTO }
                    <div className="file is-light is-medium mt-2">
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
                </div>
            );
        } else if (activeStep == 1){
            return (
                <>
                    <div className="mt-5">
                        <div className="my-3">
                            <h1 className="has-text-weight-semibold">ENDEREÇO</h1>
                        </div>
                    </div>

                    // { ENDEREÇO E NÚMERO }
                    <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <div className="field is-flex-grow-5"> 
                            <div className="control">
                                <input className="input is-medium mr-1" type="text" placeholder="endereço"/>
                            </div>
                        </div>

                        <div className="field is-flex-grow-1"> 
                            <div className="control">
                                <input className="input is-medium ml-1" type="text" placeholder="número"/>
                            </div>
                        </div>
                    </div>

                    { BAIRRO E COMPLEMENTO }
                    <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <div className="field is-flex-grow-1"> 
                            <div className="control">
                                <input className="input is-medium mr-1" type="text" placeholder="bairro"/>
                            </div>
                        </div>

                        <div className="field is-flex-grow-1"> 
                            <div className="control">
                                <input className="input is-medium ml-1" type="text" placeholder="complemento"/>
                            </div>
                        </div>
                    </div>

                    { CIDADE E CEP }
                    <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <div className="field is-flex-grow-1"> 
                            <div className="control">
                                <input className="input is-medium mr-1" type="text" placeholder="cidade"/>
                            </div>
                        </div>

                        <div className="field is-flex-grow-1"> 
                            <div className="control">
                                <input className="input is-medium ml-1" type="text" placeholder="cep"/>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="mt-5">
                        <div className="my-3">
                            <h1 className="has-text-weight-semibold">OUTRAS INFORMAÇÕES</h1>
                        </div>
                    </div>

                    { VALOR E LIMPEZA }
                    <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <div className="field is-flex-grow-1"> 
                            <div className="control">
                                <input className="input is-medium mr-1" type="text" placeholder="valor médio (contas/pessoa)"/>
                            </div>
                        </div>

                        <div className="field is-flex-grow-1">
                            <div className="control">
                                <div className="select is-medium ml-1">
                                    <select className="tipo">
                                        <option>política de limpeza</option>
                                        <option>Diarista</option>
                                        <option>Empregada</option>
                                        <option>Moradores</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    { RADIO BUTTONS }
                    <div className="is-flex is-flex-direction-row is-size-5 mt-3">  
                        <div className="is-flex is-flex-direction-column is-flex-grow-1">  
                            <div className="field is-flex-grow-1">
                                <label>há acesso à cozinha?</label>
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
                                <label>há acesso à lavanderia?</label>
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

                        <div className="is-flex is-flex-direction-column is-flex-grow-1 ml-3">  
                            <div className="field is-flex-grow-1">
                                <label>tem ou aceita pets?</label>
                                <div className="control">
                                    <label className="radio">
                                    <input type="radio" name="question3"/>
                                    SIM
                                    </label>
                                    <label className="radio">
                                    <input type="radio" name="question3"/>
                                    NÃO
                                    </label>
                                </div>
                            </div>

                            <div className="field is-flex-grow-1">
                                <label>possui garagem?</label>
                                <div className="control">
                                    <label className="radio">
                                    <input type="radio" name="question4"/>
                                    SIM
                                    </label>
                                    <label className="radio">
                                    <input type="radio" name="question4"/>
                                    NÃO
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }         
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Informações alteradas com sucesso.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Link to="/RepProfile">
                <Button>Voltar</Button>
            </Link>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {content(activeStep)}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Anterior
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Salvar' : 'Próximo'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

*/