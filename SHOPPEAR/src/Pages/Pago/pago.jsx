import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ModalExitoso from '../../Components/ModalExitoso/ModalExitoso';

const pago = () => {
return (
    <div className="m-5">
        <hr></hr>
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

            <ModalExitoso/>
        </Form>
    </div>
)
}

export default pago