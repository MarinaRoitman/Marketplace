import React from 'react'
import './card.css'
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
    

    return (
        <div className="centrar">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(1)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <div className="centrarElem CardContentWithoutPadding">
                                <Card className='styleCard' sx={{ borderRadius: '2em', maxWidth: '100%', height: 'fit-content'}}>
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
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div> 
    );
};

export default CardComponent;

/*
        <div>
            <div className="centrar">
                <div className="centrarElem">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
                            <Grid item xs={12} sm={4} md={4}>
                                <Card className='styleCard' sx={{ borderRadius: '2em', maxWidth: '90%'}}>
                                    <CardContent>
                                        <img src={producto.img} alt={producto.nombre} className='sizeImg'/>
                                        <div style={{ marginLeft: '10px' }}>
                                            <p>{producto.nombre}</p>
                                            <p>${producto.precio}</p>
                                            <p>{producto.rating}</p>
                                        </div>
                                    </CardContent>
                                    <div>
                                        <Button className="moreButton" size="small" onClick={agregarItemEnCarrito} variant="dark"><p>+</p></Button>
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div> 
        </div>
*/
