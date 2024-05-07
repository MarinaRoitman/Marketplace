import React,{useState} from 'react';
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
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const [selectedPayment, setSelectedPayment] = useState('');

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <div>
            <hr />
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="ContenedorStyle">
                            <h2 style={{marginBottom:'1em'}}>¡Sólo falta 1 paso!, complete los datos a continuación...</h2>
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
                                            <option>Elegir</option>
                                            <option>Buenos Aires</option>
                                            <option>CABA</option>
                                            <option>Catamarca</option>
                                            <option>Chaco</option>
                                            <option>Chubut</option>
                                            <option>Córdoba</option>
                                            <option>Corrientes</option>
                                            <option>Entre Ríos</option>
                                            <option>Formosa</option>
                                            <option>Jujuy</option>
                                            <option>La Pampa</option>
                                            <option>La Rioja</option>
                                            <option>Mendoza</option>
                                            <option>Misiones</option>
                                            <option>Neuquén</option>
                                            <option>Río Negro</option>
                                            <option>Salta</option>
                                            <option>San Juan</option>
                                            <option>San Luis</option>
                                            <option>Santa Cruz</option>
                                            <option>Santa Fe</option>
                                            <option>Santiago del Estero</option>
                                            <option>Tierra del Fuego</option>
                                            <option>Tucumán</option>

                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>

                                <div style={{backgroundColor: 'rgb(243, 243, 243)',padding:'1.1em'}}>
                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Label>Seleccione método de pago:</Form.Label>
                                    <Form.Check
                                            type="radio"
                                            name="payment"
                                            value="credito"
                                            label="Crédito"
                                            checked={selectedPayment === 'credito'}
                                            onChange={handlePaymentChange}
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="payment"
                                            value="debito"
                                            label="Débito"
                                            checked={selectedPayment === 'debito'}
                                            onChange={handlePaymentChange}
                                        />
                                    </Form.Group>
                                </div>

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
