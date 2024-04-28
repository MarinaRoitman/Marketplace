import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import imgTest from '/assets/MUJER/mj8.jpg';
import BotonCantidad from '../BotonCantidad/botonCantidad.jsx';
import { Edit } from '../Iconos/iconos.jsx';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Example() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
        <Button variant="dark" onClick={handleShow}>
            <Edit/>
        </Button>
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-start">

        <div className="img-div me-modal-img">
            <Figure>
            <Figure.Image
                alt="171x180"
                src={imgTest}
                />
            </Figure>
        </div>

            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="email"
                placeholder="Nombre del Producto"
                autoFocus
                />
            </Form.Group>

            <Row>
                <Col>
                <Form style={{ maxWidth: '150px' }}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                type="Numero"
                placeholder="Precio"
                autoFocus
                />
                </Form>
                </Col>
                
                <Col>
                    <Form.Label>Cantidad</Form.Label>
                    <BotonCantidad minValue={0} maxValue={20}/>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Seleccionar Categoría">
                <option>Seleccionar Categoría</option>
                <option value="1">Hogar</option>
                <option value="2">Mujer</option>
                <option value="3">Hombre</option>
                <option value="4">Mascotas</option>
                <option value="5">Electrónica</option>
            </Form.Select>
            <br />
            <Form.Label>Agregar Foto</Form.Label>
            <Form.Group controlId="formFile">
            <Form.Control type="file" />
            </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
            Eliminar
        </Button>
        <Button variant="dark" onClick={handleClose}>
            Agregar
        </Button>
        </Modal.Footer>
    </Modal>
    
    </>
);
}

export default Example;