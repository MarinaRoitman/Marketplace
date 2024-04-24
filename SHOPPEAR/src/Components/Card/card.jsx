import React from 'react'
import './card.css'
import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import json from '../../../JSONs/productos.json'


export const CardComponent = (producto) => {
    const {id, nombre, precio, rating, img} = producto
    console.log(img)
    let carrito = {
        productosIds: [],
        cantidades: [],
        total: 0
    };

    function agregarAlCarrito(idProducto){
        var estabaElProducto = false; //Declaro y pongo en false a estabaElProducto
        var carritoActual = JSON.parse(localStorage.getItem("Carrito"));
        
        if(carritoActual == null){
            carritoActual = carrito;
        } 
    
        for (let i = 0; i < carritoActual.productosIds.length; i++) //Recorro
        {
            if (idProducto == carritoActual.productosIds[i]) //Pregunto si el producto ya se encontraba en el carrito
            {
                estabaElProducto = true; //estabaElProducto se vuelve true
                carritoActual.cantidades[i] += 1; //Le sumo uno a la cantidad de veces que se encuentra el producto en el carrito
            }
        }
    
        if (!estabaElProducto) //Si el producto no estaba en el carrito...
        {
            carritoActual.cantidades.push(1);
            carritoActual.productosIds.push(idProducto); //... lo agrego al carrito
        }
        localStorage.setItem("Carrito", JSON.stringify(carritoActual));
    }


    const agregarItemEnCarrito = () => {
        
        agregarAlCarrito(producto.id);
    }

    let cardArr = json.productos;

    return (
        <div className="centrar">
            <div className="card-container">
                    {cardArr.map((producto, index) => (
                            <div key={index} className="centrarElem CardContentWithoutPadding">
                                <Card className='styleCard' style={{ borderRadius: '2em', width: '18rem', height:'28rem'}}>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        src={producto.img}
                                        className="card-image"
                                    />
                                    <CardContent>
                                        <div className="card-text">
                                            <p>{producto.nombre}</p>
                                            <p>${producto.precio}</p>
                                            <p>{producto.rating}</p>
                                        </div>
                                    </CardContent>
                                    <div>
                                        <Button className="moreButton" size="small" onClick={agregarItemEnCarrito} variant="dark"><p>+</p></Button>
                                    </div>
                                </Card>
                            </div>
                    ))}
                    </div>
        </div> 
    );
};

export default CardComponent;