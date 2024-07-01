import React, {useEffect , useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sidemenucarrito.css';
import { CarritoIcon } from '../Iconos/iconos.jsx';
import CardCarrito from '../CardCarrito/cardCarrito.jsx';
import ModalExitoso from '../ModalExitoso/ModalExitoso.jsx';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
} from "../../redux/actions/carrito.actions";

import { useNavigate } from 'react-router-dom';


function OffCanvasExample({ name, ...props }) {
  const cartItems = useSelector((state)=> state.cart.cartItems)
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  const navigate = useNavigate();
  const options = [
  {
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
  }
];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const [sumaTotal, setSumaTotal] = useState(0);



  useEffect(() => {
    setSumaTotal(cartItems.reduce((total,item) => total+=item.price*item.mount*(1-item.descuento/100), 0))
  }, [cartItems]);

  const deleteProduct = (id) => {
    const newProducts = cartItems.filter((product) => product.id !== id);
    dispatch(removeFromCart(newProducts));
  }

  const checkAuth = () => {
    if (token) {
      navigate('/Pago')
    } else {
      navigate('/Login')
    }
  }
  
  return (
    <>
      <button className="cart-button me-2" onClick={toggleShow}>
        <CarritoIcon />
      </button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <h2>Mi Carrito</h2>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          {cartItems.map((item)=> <CardCarrito id={item.id} name={item.name} price={item.price} img={item.img} mount={item.mount} deleteProduct={deleteProduct} descuento={item.descuento}/>)}
          <div style={{ textAlign: 'center', marginTop: 'auto' }}>
            <div>
              <hr />
              <h2 style={{ textAlign: 'left' }}>Total: ${sumaTotal}</h2>
              <Button variant="dark" onClick={checkAuth}>
                Comprar
              </Button>

            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;