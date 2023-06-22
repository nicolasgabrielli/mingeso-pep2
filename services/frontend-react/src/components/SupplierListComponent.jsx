import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import cow from '../images/polish-cow-polish.gif';
import background from '../images/windowsxp.jpg';
import '../App.css';
import '../fonts/TitilliumWeb-Regular.ttf';
import '../fonts/TitilliumWeb-Bold.ttf';
import axios from 'axios';

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

const TableContainer = styled.div`
  position: relative;
  max-width: 1199.98px;
  margin: 20px auto 0;
  padding: 0 15px;


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid #000;
  color: #fff;
  text-align: center;
  font-family: Regular, sans-serif;
`;

class SupplierListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suppliers: []
    }
  }

  componentDidMount() {
    axios.get("gateway-service/supplier")
      .then(response => response.data)
      .then((data) => {
        this.setState({ suppliers: data })
      });
  }

  render() {
    const { suppliers } = this.state;

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
                <a className="btn btn-outline-light" href="/supplier/create" role="button">
                  <span className="button-text">Ingresar Proveedor</span>
                </a>
                <a className="btn btn-outline-light" href="/" role="button">
                  <span className="button-text">Volver</span>
                </a>
                <CowImage src={cow} alt="Cow" />
              </div>
            </Navbar>
            <div className="f">
              <TableContainer>
                <Table className="table button-text table-dark">
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>Nombre</th>
                      <th>Categoría</th>
                      <th>Retención</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier) => (
                      <tr key={supplier.code}>
                        <td>{supplier.code}</td>
                        <td>{supplier.name}</td>
                        <td>{supplier.category}</td>
                        <td>{supplier.retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableContainer>
            </div>

          </HomeStyle>
        </MainContainer>
      </>
    );
  }
}

export default SupplierListComponent;