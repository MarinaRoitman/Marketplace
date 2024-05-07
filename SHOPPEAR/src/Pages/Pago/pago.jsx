import React from 'react';
import Button from 'react-bootstrap/Button';
import './pago.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ModalExitoso from '../../Components/ModalExitoso/ModalExitoso';
import {useSelector} from 'react-redux'
import CardCarrito from '../../Components/CardCarrito/cardCarrito';

const Pago = () => {
    const cartItems = useSelector((state)=> state.cart.cartItems)


return (
<div>
    <hr />
    <Container>
    <Row>
        <Col xs={12} md={8}>
        <div className="ContenedorStyle">
            <Form>
            <Row className="mb-3 mblank-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="Av Santa Fe 1234" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Dirección 2</Form.Label>
                <Form.Control placeholder="Apartamento, Oficina, Estudio" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Provincia</Form.Label>
                <Form.Select defaultValue="Elegir">
                    {/* Opciones de Provincia */}
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <ModalExitoso />
            </Form>
        </div>
        </Col>

        <Col xs={12} md={4}>
        <div>
            {cartItems.map((item)=> <CardCarrito {...item}/>)}
        </div>
        </Col>
    </Row>
    </Container>
</div>
);
};

export default Pago;
