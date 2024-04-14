import React, {useEffect, useState} from 'react'
import Card from '../Card/card';

const Cards = ({}) => {
    const[productos, setProductos] = useState([])
    useEffect(()=>{fetch('../../../../JSONs/productos.json').then(response => response.json()).then(productosJSON => setProductos(productosJSON.productos))})
    return (
        <div>
            {
                productos.map(producto =>
                <Card
                key={producto.id}
                id={producto.id}
                nombre = {producto.nombre}
                precio = {producto.precio}
                rating = {producto.rating}
                img = {"../.." + producto.img}
                />
            )
            }
        </div>
    );
};

export default Cards;