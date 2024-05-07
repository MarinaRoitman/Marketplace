import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import img from '/assets/MUJER/mj13.jpg';
import BotonCantidad from '../../Components/BotonCantidad/botonCantidad';
import './prueba.css'

const Prueba = () => {
return (
<div className="product-detail-container" style={{ display: 'flex', justifyContent: 'center', alignItems:'center',margin:'4em'}}>
    <div className="product-imagen">
    <   img src={img} alt='img' />
    </div>
    <div className="product-info" style={{ marginLeft: '20px', margin:'7em'}}>
        <h2>Nombre Producto</h2>
        <p className="product-descripcion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit mattis diam quis vehicula. Nulla scelerisque diam a porta porttitor. Nam dictum sapien sed venenatis ornare. Proin ullamcorper luctus tellus. Praesent malesuada, nisl eget convallis lobortis, nibh sem tincidunt tortor, eget semper lectus nisi ut eros. Ut dictum tristique vestibulum. Integer dignissim vulputate turpis in mollis. Ut ac felis porttitor, fermentum erat sit amet, molestie nisl.
        </p>
        <p className="product-precio">Precio: $8000</p>
        <p className="product-precio">Quedan 20 unidades</p>
        <BotonCantidad/>
        <Button variant='dark'>Agregar</Button>
    </div>
</div>
);
}

export default Prueba;
