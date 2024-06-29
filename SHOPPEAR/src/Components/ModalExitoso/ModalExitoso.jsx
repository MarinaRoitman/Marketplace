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
  } from "../../redux/actions/products.actions";


  
const ModalExitoso = () => {
    const products = useSelector((state)=> state.products.products)
    const cartItems = useSelector((state)=> state.cart.cartItems)
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    function erraseCart(){
        dispatch(emptyCart());
        setShow(false);
    }

    function confirmarCompra(){
        const itemsUpdate = products.map((item) => {
            const itemCart = cartItems.find((i) => i.id === item.id);
            if(itemCart){
                
                //item.stock = item.stock - itemCart.mount;

                return {...item, stock: item.stock - itemCart.mount}
            }
            return item
        });
        setShow(true);
        //dispatch(editExistingProduct(itemsUpdate));
        //console.log("patito",itemsUpdate);
        dispatch(discountStock(itemsUpdate));

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