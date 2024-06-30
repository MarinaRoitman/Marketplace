import React,{useState, useEffect } from 'react';
import './pago.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ModalExitoso from '../../Components/ModalExitoso/ModalExitoso';
import {useSelector, useDispatch} from 'react-redux'
import CardCarrito from '../../Components/CardCarrito/cardCarrito';
import { removeFromCart } from '../../redux/actions/carrito.actions';

const Pago = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { isAuthenticated, user, users, datosUsuario } = useSelector(state => state.auth);
    const [direccion, setDireccion] = useState(datosUsuario.direccion);
    const [tarjeta, setTarjeta] = useState('');

    const [selectedPayment, setSelectedPayment] = useState('');
    const dispatch = useDispatch();
    const [sumaTotal, setSumaTotal] = useState(0);

    const deleteProduct = (id) => {
        const newProducts = cartItems.filter((product) => product.id !== id);
        dispatch(removeFromCart(newProducts));
    }

    useEffect(() => {
    setSumaTotal(cartItems.reduce((total,item) => total+=item.price*item.mount, 0))
    }, [cartItems]);

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const realizarCompra = () => {

    }

    return (
        <div>
            <hr />
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="ContenedorStyle">
                            <h2 style={{marginBottom:'1em'}}>¡Sólo falta 1 paso!, complete los datos a continuación...</h2>
                            <Form>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control placeholder="Av Santa Fe 1234" value={direccion} onChange={(e) => setDireccion(e.target.value)} required/>
                                </Form.Group>

                                <div style={{backgroundColor: 'rgb(243, 243, 243)',padding:'1.1em', paddingBottom:'0.4em'}}>
                                <Form.Label>Inserte número de tarjeta:</Form.Label>
                                <Form.Control
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    value={tarjeta}
                                    onChange={(e) => {
                                        // Remover cualquier caracter que no sea un número
                                        let input = e.target.value.replace(/\D/g, '');
                                        // Limitar el número de caracteres a 16
                                        input = input.slice(0, 16);
                                        // Para que haya espacios
                                        input = input.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
                                        // Actualizar el estado solo si el valor no está vacío
                                        if (input || input === '') {
                                            setTarjeta(input);
                                        }
                                    }}
                                    required
                                />
                                </div>

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
                                <ModalExitoso tipoPago={selectedPayment} numTarjeta={tarjeta} direccionFactura={direccion}/>
                            </Form>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div>
                            <h2 style={{ textAlign: 'left', marginTop: '1em', marginBottom:'1em'}}>Total: ${sumaTotal}</h2>
                            {cartItems.map((item)=> <CardCarrito id={item.id} name={item.name} price={item.price} img={item.img} mount={item.mount} deleteProduct={deleteProduct}/>)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pago;
