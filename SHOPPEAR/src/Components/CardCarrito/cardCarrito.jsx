import React from 'react';
import './cardCarrito.css';
import Card from 'react-bootstrap/Card';
import imgTest from '../../Assets/MUJER/mj1.jpg';
import Button from 'react-bootstrap/Button';

const cardCarrito = () => {
  return (
    <Card className="horizontal-card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <Card.Img src={imgTest} alt="Product" />
        </div>
        <Card.Body>
          <h4>Short Negro</h4>
          <div>
            <p>Precio: 1000</p>
          </div>
          <Card.Text>
          Short de denim, tiro alto.
          </Card.Text>
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