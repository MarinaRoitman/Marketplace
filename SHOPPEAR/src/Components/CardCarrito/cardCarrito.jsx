import React from 'react';
import './cardCarrito.css';
import Card from 'react-bootstrap/Card';
import imgTest from '/assets/MUJER/mj1.jpg';
import Button from 'react-bootstrap/Button';
import { BasuraIcon } from '../Iconos/iconos.jsx';

const cardCarrito = () => {
  return (
    <Card className="horizontal-card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <Card.Img src={imgTest} alt="Product" />
        </div>
        <Card.Body>
          <div className="product-info">
            <h5>Short Negro</h5>
            <BasuraIcon className="trashStyle" />
          </div>
          <div>
            <p>Precio: 1000</p>
          </div>
          <footer>
            <small>Cantidad: 1</small>
            <Button className="botonStyle" variant="dark">+</Button>
            <Button className="botonStyle" variant="dark">-</Button>
          </footer>
        </Card.Body>
      </div>
    </Card>
  );
};

export default cardCarrito;