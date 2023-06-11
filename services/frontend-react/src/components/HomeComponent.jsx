import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import cow from '../images/polish-cow-polish.gif';
import background from '../images/windowsxp.jpg';
import '../App.css';
import '../fonts/TitilliumWeb-Regular.ttf';
import '../fonts/TitilliumWeb-Bold.ttf';

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
  background-image: url(${background});
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
    font-family: Bold, sans-serif;
    font-size: 30px;
  }
`;

const Navbar = styled.nav`
  &.bg-light {
    background: linear-gradient(#000 0.5%, #0000) !important;
  }
`;

const Container = styled.div`
  &.container {
    max-width: 1199.98px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const BoxContainer = styled.div`
  &.box-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.a`
  &.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 30px;
    font-size: 24px;
    font-weight: bold;
    color: #343a40;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const CowImage = styled.img`
  width: 72px;
  height: 48px;
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
      <HomeStyle>
        <Navbar className="navbar bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0">
              <h1>MilkStgo</h1>
            </span>
            <CowImage src={cow} alt="Cow" />
          </div>
        </Navbar>
        <Container className="container">
          <BoxContainer className="box-center">
            <div className="p-2 flex-fill bd-highlight">
              <Button
                href="/supplier"
                className="btn btn-primary btn-lg btn-block btn-light rounded-pill"
                role="button"
                aria-pressed="true"
              >
                <h2 className="button-text">Ver Proveedores</h2>
              </Button>
            </div>
            <div className="p-2 flex-fill bd-highlight">
              <Button
                href="/file-upload"
                className="btn btn-primary btn-lg btn-block btn-light rounded-pill"
                role="button"
                aria-pressed="true"
              >
                <h2 className="button-text">Subir Archivo</h2>
              </Button>
            </div>
          </BoxContainer>
        </Container>
      </HomeStyle>
    </MainContainer>
    </>
  );
}
