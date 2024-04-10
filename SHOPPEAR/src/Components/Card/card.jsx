import React from 'react'
import './card.css'
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const CardComponent = (producto) => {
    const {nombre, precio, rating, img} = producto
    return (
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
                                        <Button className="moreButton" size="small" variant="dark"><p>+</p></Button>
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div> 
        </div>  
    );
};

export default CardComponent;


