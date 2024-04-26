import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import imgTest from '/assets/MUJER/mj1.jpg';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Example() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
        <Button variant="info" onClick={handleShow}>
        Crear Producto
        </Button>
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-start">
        <div className="img-square-wrapper me-2">
            <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={imgTest}
                className="me-3"
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
        <Button variant="dark" onClick={handleClose}>
            Agregar
        </Button>
        </Modal.Footer>
    </Modal>
    
    </>
);
}

export default Example;