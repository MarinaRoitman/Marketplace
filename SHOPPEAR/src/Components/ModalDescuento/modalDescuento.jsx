import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
        <Button variant="info" onClick={handleShow} style={{margin:'1em'}}>
        Crear Descuento
        </Button>
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Descuento</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre del producto:</Form.Label>
                <Form.Control
                type="email"
                placeholder="Nombre del Producto"
                autoFocus
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Descuento (%):</Form.Label>
                <Form.Control
                type="number"
                placeholder="Descuento"
            />
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