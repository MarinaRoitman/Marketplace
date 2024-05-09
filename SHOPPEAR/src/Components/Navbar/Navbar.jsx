import React, { useState } from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '/assets/logo.png';
import search from '/assets/search.png';
import carritoVacio from '/assets/carrito vacio.png';
import {Link} from 'react-router-dom';
import SideMenuCarrito from '../SideMenuCarrito/sidemenucarrito.jsx';
import {useDispatch, useSelector } from 'react-redux'
import {
  startSearch
} from "../../redux/actions/search.actions.js";
const NavbarPrincipal = () => {

  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.products.products);

  const handleChange = (event) => {
    //console.log("state: ", filteredProducts);
    setSearchValue(event.currentTarget.value.toLowerCase());
    console.log("letra:", event.currentTarget.value);
    console.log("ZA", filteredProducts.filter(producto => producto.nombre.toLowerCase().includes(searchValue)));
    dispatch(startSearch(filteredProducts.filter(producto => producto.nombre.toLowerCase().includes(searchValue))));
    console.log("ZB", filteredProducts.filter(producto => producto.nombre.toLowerCase().includes(searchValue)));
  }
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
              <Navbar.Brand href="/">
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
                  <input className="input" value={searchValue} placeholder="Buscar" onChange={handleChange}
                    style={{ width: '20em', border: 'none'}}/>
                    <img src={search} className='icon' alt="Search"></img> 
                </div>
              </Col>
              <Col xs={12} md={4} className="d-flex align-items-center justify-content-center padding-top-md" > 
                <div>
                  <div>
                  <button className="button1" role="button">
                      <Link to="/Login" className='styleLinkNone'>Login</Link>
                    </button>
                    <button className="button1" role="button">
                      <Link to="/Cuenta" className='styleLinkNone'>Mi cuenta</Link>
                    </button>
                    <SideMenuCarrito/>
                  </div>
                </div>
              </Col>
          </Row>
        <Row className='centrarItems'>
          <Col xs={12}>
              <div>
                <ul className ="nav-menu">
                  <li className ="hvr-underline-from-left hvr-underline-from-left:before">
                    <Link to="/" className='styleLinkNone'>Menú</Link>
                  </li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">
                    <Link to="/Mujer" value="mujeres" className='styleLinkNone'>Mujer</Link>
                  </li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">
                    <Link to="/Hombre" value="hombres" className='styleLinkNone'>Hombre</Link>
                  </li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">
                    <Link to="/Niños" value="ninos" className='styleLinkNone'>Niños</Link>
                  </li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">
                    <Link to="/Mascotas" value="mascotas" className='styleLinkNone'>Mascotas</Link>
                  </li>
                  <li className="hvr-underline-from-left hvr-underline-from-left:before">
                    <Link to="/Electronica" value="tecnologia" className='styleLinkNone'>Electrónica</Link>
                  </li>
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

/*
<button className="buttonCart" role="button"><img src={carritoVacio} className='sizeCarrito' alt="carrito vacio" /></button>
*/