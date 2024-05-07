import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalExitoso = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return (
    <>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Compra Exitosa</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>
            Su compra se realizó correctamente. <br />
            ¡Muchas Gracias por tu compra!</Modal.Body>
        <Modal.Footer>
    <Button variant="dark" onClick={handleClose}>
            Cerrar
        </Button>
        </Modal.Footer>
    </Modal>
</>
)
}

export default ModalExitoso