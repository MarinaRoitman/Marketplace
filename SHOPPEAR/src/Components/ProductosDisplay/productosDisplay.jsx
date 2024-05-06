import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ProductDisplay({ producto }) {
    return (
        <div>
            <Button variant="dark">hola</Button>
        </div>
    );
}

export default ProductDisplay;

/*

const { id } = useParams();
    const product = producto.find(p => producto.id === id);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
    <div className="product-detail-container">
        <div className="product-imagen">
        <img src={producto.img} alt={producto.nombre} />

    </div>
    <div className="product-info">
        <h2>{producto.name}</h2>
        <p className="product-descripcion">{producto.descripcion}</p>
        <p className="product-precio">Precio: ${producto.precio}</p>
    </div>
    </div>
);
*/