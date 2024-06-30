import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {
    emptyCart, editExistingProduct,
  } from "../../redux/actions/carrito.actions";
  import {
    discountStock,
    fetchProducts,
  } from "../../redux/actions/products.actions";
import { fetchHacerCompra } from '../../redux/actions/products.actions';

  
const ModalExitoso = ({tipoPago, numTarjeta, direccionFactura}) => {
    const products = useSelector((state)=> state.products.products)
    const cartItems = useSelector((state)=> state.cart.cartItems)
    const { isAuthenticated, user, users, datosUsuario } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    function erraseCart(){
        dispatch(emptyCart());
        setShow(false);
    }

    function confirmarCompra(){
        var detalleProds = [];
        for (const item of cartItems) {
            detalleProds.push({
                idProd: item.id,
                cantidad: item.mount
            });
        }
        dispatch(fetchHacerCompra(user, detalleProds, direccionFactura, tipoPago, numTarjeta))
        setShow(true);
        dispatch(fetchProducts())
    }

return (
    <>
        <Button variant="dark" onClick={confirmarCompra} style={{margin:'1em'}}>
            Confirmar Compra
        </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Compra Exitosa</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>
            Su compra se realizó correctamente. <br />
            ¡Muchas Gracias por tu compra!</Modal.Body>
        <Modal.Footer>
            <Link to="/" className='styleLinkNone'>
                <Button variant="dark" onClick={erraseCart}>
                    Cerrar
                </Button>
            </Link>
        </Modal.Footer>
    </Modal>
</>
)
}

export default ModalExitoso