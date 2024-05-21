import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import imgTest from '/assets/MUJER/mj1.jpg';
import BotonCantidad from '../BotonCantidad/botonCantidad.jsx';
import {useDispatch} from 'react-redux'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalProducto() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const dispatch = useDispatch();

const [nombre, setNombre] = useState('');
const [precio, setPrecio] = useState('');
const [descripcion, setDescripcion] = useState('');
const [cantProd, setCantProd] = useState(0);
const [category, setCategory] = useState('');

const createProduct = (formData) => {

}

const handleClickMount = (value) => {
    if(value > 0)
    {
        setCantProd(value)
    }
    }

return (
    <>
        <Button variant="outline-info" onClick={handleShow}>
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
                type="name"
                placeholder="Nombre del Producto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoFocus
                />
            </Form.Group>

            <Row>
                <Col>
                <Form style={{ maxWidth: '150px' }}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                autoFocus
                />
                </Form>
                </Col>
                
                <Col>
                    <Form.Label>Cantidad</Form.Label>
                    <BotonCantidad mount={cantProd} onClick={handleClickMount}/>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} 
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
            />
            </Form.Group>
            <Form.Select aria-label="Seleccionar Categoría" onChange={(e) => setCategory(e.target.value)}>
                <option>Seleccionar Categoría</option>
                <option value="Hogar">Hogar</option>
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
                <option value="Mascotas">Mascotas</option>
                <option value="Electrónica">Electrónica</option>
            </Form.Select>
            <br />
            <Form.Label>Agregar Foto</Form.Label>
            <Form.Group controlId="formFile">
            <Form.Control type="file" />
            </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="dark" type='submit' onClick={handleClose}>
            Agregar
        </Button>
        </Modal.Footer>
    </Modal>
    
    </>
);
}

export default ModalProducto;