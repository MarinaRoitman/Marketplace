import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalError = () => {
return (
    <>
    {/*     NO SE SI SE VA A USAR UN BOTON, POR LAS DUDAS LO DEJO
        <Button variant="dark" onClick={confirmarCompra} style={{margin:'1em'}}>
            Confirmar Compra
        </Button>
    */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Insuficiente Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>
            Su compra se no se pudo procesar correctamente debido a la falta de stock. <br />
            Disculpa las mostestias.</Modal.Body>
        <Modal.Footer>
    <Button variant="dark" onClick={handleClose}>
            Cerrar
        </Button>
        </Modal.Footer>
    </Modal>
</>
)
}

export default ModalError