import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SupplierService from '../services/SupplierService';
import cow from '../images/polish-cow-polish.gif';
import background from '../images/windowsxp.jpg';
import '../App.css';
import '../fonts/TitilliumWeb-Regular.ttf';
import '../fonts/TitilliumWeb-Bold.ttf';
import { Form } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Titillium Web', sans-serif;
  }
`;

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #343a40;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

`;


const HomeStyle = styled.div`
  .btn-lg {
    width: 100%;
  }

  .text-center {
    text-align: center;
  }

  .box-center {
    max-width: 1199.98px;
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .navbar-brand {
    margin-left: 50%;
    transform: translateX(-50%);
    font-family: Bold, sans-serif;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }

  .bg-light {
    background: linear-gradient(#000 0.5%, #0000) !important;
  }

  .button-text {
    font-family: Regular, sans-serif;
    font-size: 20px;
  }
`;

const Navbar = styled.nav`
  &.bg-light {
    background: linear-gradient(#000 0.5%, #0000) !important;
  }
`;

const CowImage = styled.img`
  width: 72px;
  height: 48px;
`;

const FormContainer = styled.form`
  position: relative;
  max-width: 1199.98px;
  margin: 20px auto 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  font-family: Regular, sans-serif;
    color: #fff;
`;

const FormTitle = styled.h3`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
  margin: 20px auto 0;
`;

const FormCancelButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: #fff;
  cursor: pointer;
    margin: 20px auto 0;
`;

const Label = styled.label`
  text-align: left;
    display: block;
    margin-bottom: 10px;
`;  

const HelpText = styled.small`
    text-align: left;
    color: #6c757d;
    display: block;
    margin-bottom: 10px;
`;


class SuppleirCreateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            code: '',
            category: '',
            retention: '',
        }
        this.saveSupplier = this.saveSupplier.bind(this);
    }

    saveSupplier = (e) => {
        e.preventDefault();
        let supplier = { name: this.state.name, code: this.state.code, category: this.state.category, retention: this.state.retention };
        console.log('supplier => ' + JSON.stringify(supplier));

        SupplierService.SaveSupplier(supplier).then(res => {
            this.props.history.push('/suppliers');
        });
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeCodeHandler = (event) => {
        this.setState({ code: event.target.value });
    }

    changeCategoryHandler = (event) => {
        this.setState({ category: event.target.value });
    }

    changeRetentionHandler = (event) => {
        this.setState({ retention: event.target.value });
    }

    cancel() {
        this.props.history.push('/suppliers');
    }

    render() {
        return (
            <>
                <GlobalStyle />
                <MainContainer>
                    <HomeStyle>
                        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <span className="navbar-brand mb-0">
                                    <h1>MilkStgo</h1>
                                </span>
                                <a className="btn btn-outline-light" href="/supplier" role="button">
                                    <span className="button-text">Ver Proveedores</span>
                                </a>
                                <a className="btn btn-outline-light" href="/" role="button">
                                    <span className="button-text">Volver a la Página Inicial</span>
                                </a>
                                <CowImage src={cow} alt="Cow" />
                            </div>
                        </Navbar>
                        <FormContainer>
                            <FormTitle>Agregar Proveedor</FormTitle>
                            <form>
                                <div className="form-group">
                                    <Label>Nombre</Label>
                                    <FormControl
                                        placeholder="Nombre"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeNameHandler}
                                    />
                                    <HelpText>Ingrese el nombre del proveedor.</HelpText>
                                </div>
                                <div className="form-group">
                                    <Label>Código</Label>
                                    <FormControl
                                        placeholder="Código"
                                        name="code"
                                        value={this.state.code}
                                        onChange={this.changeCodeHandler}
                                    />
                                    <HelpText>Ingrese el código del proveedor.</HelpText>
                                </div>
                                <div className="form-group">
                                    <Label>Categoría</Label>
                                    <FormControl
                                        placeholder="Categoría"
                                        name="category"
                                        value={this.state.category}
                                        onChange={this.changeCategoryHandler}
                                    />
                                    <HelpText>Ingrese la categoría del proveedor.</HelpText>
                                </div>
                                <div className="form-group">
                                    <Label>Retención</Label>
                                    <FormControl
                                        placeholder="Retención"
                                        name="retention"
                                        value={this.state.retention}
                                        onChange={this.changeRetentionHandler}
                                    />
                                    <HelpText>Ingrese la retención del proveedor.</HelpText>
                                </div>
                                <FormButton className="btn btn-success" onClick={this.saveSupplier}>
                                    Guardar
                                </FormButton>
                                <FormCancelButton
                                    className="btn btn-danger"
                                    onClick={this.cancel.bind(this)}
                                >
                                    Cancelar
                                </FormCancelButton>
                            </form>
                        </FormContainer>
                    </HomeStyle>
                </MainContainer>
            </>
        )
    }
}

export default SuppleirCreateComponent;