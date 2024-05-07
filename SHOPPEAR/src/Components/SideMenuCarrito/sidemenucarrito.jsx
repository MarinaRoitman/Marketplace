import React, {useState, useMemo} from 'react';
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sidemenucarrito.css';
import { CarritoIcon } from '../Iconos/iconos.jsx';
import CardCarrito from '../CardCarrito/cardCarrito.jsx';
import ModalExitoso from '../ModalExitoso/ModalExitoso.jsx';

function OffCanvasExample({ name, ...props }) {
  const cartItems = useSelector((state)=> state.products.products)
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

  const handleCalculateTotal = useMemo(() => {
    //calcular el total
  },[])

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
          {cartItems.map((item)=> <CardCarrito {...item}/>)}
          <div style={{ textAlign: 'center', marginTop: 'auto' }}>
            <div>
              <hr />
              <h2 style={{ textAlign: 'left' }}>Total: $1000</h2>
                <ModalExitoso/>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;

/*
function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

render(<Example />);
*/