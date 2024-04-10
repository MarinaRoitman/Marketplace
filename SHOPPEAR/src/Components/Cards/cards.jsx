import React, {useEffect, useState} from 'react'

const Cards = ({}) => {
    const[productos, setProductos] = useState([])
    useEffect(()=>{fetch('../../../../JSONs/productos.json').then(response => response.json()).then(productosJSON => setProductos(productosJSON))})
    return (
        <div></div>
    );
};

export default Cards;