import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalPublicarProd({crearProducto}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCrearProducto = () => {
        crearProducto();
        handleClose();
    };

    return (
        <>
            <Button variant="dark" onClick={handleShow} style={{ margin: '1em' }}>
                Publicar Producto
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carga Exitosa</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    Su producto se publicó correctamente. <br />
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/" className='styleLinkNone'>
                        <Button variant="dark" onClick={handleCrearProducto}>
                            Cerrar
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPublicarProd;
