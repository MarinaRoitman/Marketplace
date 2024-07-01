import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from 'react-bootstrap';
import Modal from '../../Components/ModalEditar/ModalEditar.jsx'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './cardEditable.css';

const cardEditable = (props) => {
    const { id, name, price, img, description } = props;
    const dispatch = useDispatch();
    const { isAuthenticated, user, users, datosUsuario } = useSelector(state => state.auth);
    
    const [imageSrc, setImageSrc] = useState('');
    
    useEffect(() => {
      if (img) {
        const byteCharacters = atob(img);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Cambia 'image/jpeg' al tipo correcto
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      }
    }, [img]);

    return (
        <div className="centrar">
            <div className="card-container">
                        <div className="centrarElem CardContentWithoutPadding">
                            <Card className='styleCard' style={{ borderRadius: '2em', width: '18rem', height:'28rem'}}>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    src={imageSrc}
                                    className="card-image"
                                />
                                <CardContent>
                                    <div className="card-text" >
                                        <p style={{ textAlign: 'center',fontWeight: 'bold'}}>{name}</p>
                                        <p style={{ textAlign: 'center' }}>${price}</p>
                                    </div>
                                    </CardContent>
                                <div>
                                    <Button className="moreButton" size="small" variant="dark">
                                        <Modal id={id} name={name} price={price} img={img} description={description} />
                                    </Button>
                                </div>
                            </Card>
                        </div>
                </div>
        </div> 
    );
};

export default cardEditable