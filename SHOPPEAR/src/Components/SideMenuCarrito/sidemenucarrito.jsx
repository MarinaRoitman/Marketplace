import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sidemenucarrito.css';
import { CarritoIcon } from '../Iconos/iconos.jsx';
import CardCarrito from '../CardCarrito/cardCarrito.jsx';

function OffCanvasExample({ name, ...props }) {
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

  return (
    <>
      <button className="cart-button me-2" onClick={toggleShow}>
      <CarritoIcon />
      </button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <h2>Mi Carrito</h2>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CardCarrito/>
          <footer>
              <div>
                <hr />
                <h2>Total: $</h2>
                <Button variant='dark'>Checkout</Button>
              </div>
          </footer>
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