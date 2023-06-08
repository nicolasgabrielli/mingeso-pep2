import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import cow from '../images/cow.gif';
import background from '../images/windowsxp.jpg';
import "../App.css"
import "../fonts/TitilliumWeb-Regular.ttf"
import "../fonts/TitilliumWeb-Bold.ttf"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #343a40;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
    }
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
        font-family: Bold;
        font-size: 30px;
        color: #fff;
        text-align: center;
    }

    .bg-light{
        background: linear-gradient(#000 0.5%, #0000) !important;
    }

    .button-text {
        font-family: Regular;
        font-size: 30px;
    }
    
`;

export default function Home() {
    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <nav class="navbar bg-light">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0"><h1>MilkStgo</h1></span>
                        <img src={cow} width="72" height="48"/>
                    </div>
                </nav>
                <div class="container">
                    <div class="box-center d-flex">
                        <div class="p-2 flex-fill bd-highlight">
                            <a href="/suppliers" class="btn btn-primary btn-lg btn-block btn-light rounded-pill" role="button" aria-pressed="true">
                                <h2 class="button-text">Ver Proveedores</h2>
                            </a>
                        </div>
                        <div class="p-2 flex-fill bd-highlight">
                            <a href="/file-upload" class="btn btn-primary btn-lg btn-block btn-light rounded-pill" role="button" aria-pressed="true">
                                <h2 class="button-text">Subir Archivo</h2>
                            </a>
                        </div>
                    </div>
                </div>

            </HomeStyle>
        </div>
    );
}