import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import carritoVacio from '../../assets/carrito vacio.png';


function NavbarPrincipal() {
  return (
    <>
  <div className="contenedor">
    <div className="scroll">
      <div className="RightToLeft">
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>

        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
        <p>3 y 6 cuotas sin interes en compras superiores a $30.000 🎉</p>
      </div>
    </div>
  </div>
      <Container>
        <Row>
          <Col xs={12} md={4} className="align-items-center justify-content-center d-flex">
            <div>
              <Navbar.Brand href="#home">
                <img 
                    src={logo} 
                    id='lg' 
                    alt="Logo"
                    className="d-inline-block align-top"
                    style={{ marginRight: '10px' }}
                />{' '}
                  <p className="alinearTexto pp">SHOPPEAR</p>
              </Navbar.Brand>
            </div>
          </Col>
              <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                <div id="search-box">
                  <input className="input" placeholder="Buscar"
                    style={{ width: '20em', border: 'none'}}/>
                    <img src={search} className='icon' alt="Search"></img> 
                </div>
              </Col>
              <Col xs={12} md={4} className="d-flex align-items-center justify-content-center padding-top-md" > 
                <div>
                  <div>
                  <button className="button1" role="button">Mi cuenta</button>
                  <button className="button1" role="button">Mis pedidos</button>
                  <button className="buttonCart" role="button"><img src={carritoVacio} className='sizeCarrito' alt="carrito vacio" /></button>
                  </div>
                </div>
              </Col>
          </Row>
        <Row className='centrarItems'>
          <Col xs={12}>
              <div>
                <ul className ="nav-menu">
                  <li className ="hvr-underline-from-left hvr-underline-from-left:before">Menú</li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">Mujer</li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">Hombre</li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">Niños</li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">Mascota</li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">Electrónica</li>
                </ul>
              </div>
          </Col>
        </Row>
      </Container>
      <hr className='hrEdit'/>
    </>
  );
}

export default NavbarPrincipal;