import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Foto from '/assets/MUJER/mj8.jpg'
import { Button } from 'react-bootstrap';
import Modal from '../../Components/ModalEditar/ModalEditar.jsx'

const cardEditable = () => {
    return (
        <div className="centrar">
            <div className="card-container">
                        <div className="centrarElem CardContentWithoutPadding">
                            <Card className='styleCard' style={{ borderRadius: '2em', width: '18rem', height:'28rem'}}>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    src={Foto}
                                    className="card-image"
                                />
                                <CardContent>
                                    <div className="card-text">
                                        <p>nombre</p>
                                        <p>precio</p>
                                    </div>
                                </CardContent>
                                <div>
                                    <Button className="moreButton" size="small" variant="dark">
                                        <Modal/>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                </div>
        </div> 
    );
};

export default cardEditable