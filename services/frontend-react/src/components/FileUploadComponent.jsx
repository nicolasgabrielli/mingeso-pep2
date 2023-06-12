import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SupplierService from '../services/SupplierService';
import cow from '../images/polish-cow-polish.gif';
import background from '../images/windowsxp.jpg';
import '../App.css';
import '../fonts/TitilliumWeb-Regular.ttf';
import '../fonts/TitilliumWeb-Bold.ttf';
import Swal from 'sweetalert2';

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

const HelpText = styled.small`
  text-align: left;
  color: #6c757d;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FileUploadComponent = () => {
    const [file, setFile] = useState(null);

    const uploadFile = (e) => {
        e.preventDefault();
        new Swal({
            title: '¿Estás seguro de que quieres subir este archivo?',
            text: 'No podrás revertir esta acción',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, subir archivo',
            cancelButtonText: 'No, cancelar',
            confirmButtonColor: '#4caf50',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                new Swal({
                    title: '¡Archivo subido!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
                let formData = new FormData();
                formData.append('file', file);
                SupplierService.uploadFile(formData).then((res) => {
                    console.log(res.data);
                });
            }
            else {
                new Swal({
                    title: '¡Acción cancelada!',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }
        });
    };

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
                            <a className="btn btn-outline-light" href="/summary" role="button">
                                <span className="button-text">Ver Planilla de Pagos</span>
                            </a>
                            <a className="btn btn-outline-light" href="/" role="button">
                                <span className="button-text">Volver</span>
                            </a>
                            <CowImage src={cow} alt="Cow" />
                        </div>
                    </Navbar>
                    <FormContainer>
                        <FormTitle>Subir Archivo</FormTitle>
                        <input class="form-control" type="file" id="formFileMultiple" multiple onChange={(e) => setFile(e.target.value)}/>
                        <HelpText>Seleccione un archivo.</HelpText>
                        <FormButton className="btn btn-success" onClick={uploadFile}>
                            Guardar
                        </FormButton>
                    </FormContainer>
                </HomeStyle>
            </MainContainer>
        </>
    );
};

export default FileUploadComponent;