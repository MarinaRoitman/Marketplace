import React, { useEffect } from 'react'
import './card.css'
import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import json from '../../../JSONs/productos.json'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/carrito.actions';

import { Link } from 'react-router-dom';

export const CardComponent = (producto) => {
    const {id, nombre, precio, rating, img} = producto
    const Dispatch = useDispatch();
    
    function agregarAlCarrito(id){
        Dispatch(addToCart(id))
    }
    const nose = useSelector((state) => state.cartItems);

    useEffect(() => {
        console.log(nose);
    }, [nose])

    let cardArr = json.productos;

    return (
        <div className="centrar">
            <div className="card-container">
                    {cardArr.map((producto, index) => (
                            <div key={index} className="centrarElem CardContentWithoutPadding">
                                <Card className='styleCard' style={{ borderRadius: '2em', width: '18rem', height:'28rem'}}>
                                <Link to={`/producto/${producto.id}`}>
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
                                </Link>
                                    <div>
                                        <Button className="moreButton" size="small" onClick={() => agregarAlCarrito(producto.id)} variant="dark"><p>+</p></Button>
                                    </div>
                                </Card>
                            </div>
                    ))}
                    </div>
        </div> 
    );
};

export default CardComponent;