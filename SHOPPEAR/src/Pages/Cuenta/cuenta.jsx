import React from 'react';
import Modal from '../../Components/modalCrearProducto/modalCrearProducto.jsx'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Card from '../../Components/cardEditable/cardEditable.jsx';


function Cuenta() {
    
    return (
        <div>
            <hr />
            <h1 className='centrar'>¡Hola Usuario #132!</h1>
            <Row>
                <Col className='centrar colStyle'>
                    <Button variant='info' style={{margin:'1em'}}>Mis Datos</Button>
                    <Modal/>
                </Col>
            </Row>
            <div style={{margin:'4em', backgroundColor:'rgb(225, 229, 230)', borderRadius:'3em'}}>
                <h2 style={{padding:'0.8em'}}>Productos Publicados</h2> 
            <Card/>
            </div>
        </div>
    );
}

export default Cuenta;
