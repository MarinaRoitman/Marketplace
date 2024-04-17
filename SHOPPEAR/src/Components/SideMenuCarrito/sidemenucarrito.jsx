import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sidemenucarrito.css';
import { CarritoIcon } from '../Iconos/iconos.jsx';
import Card from 'react-bootstrap/Card';
import imgTest from '../../Assets/MUJER/mj1.jpg';
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



          <div className="cart">
            <ul>
              <li>
                <img
                  src="/assets/HOMBRE/hb4.jpg"
                  alt="hombre"
                />
                <div>
                  <strong>ropa de hombre</strong> - $1600
                </div>

                <footer>
                  <small>
                    Cantidad: 1
                  </small>
                  <Button variant="dark">+</Button>
                  <Button variant="dark">-</Button>
                </footer>
              </li>
            </ul>
          </div>




*/













/*
import React, { useState, useId } from 'react';
import './sidemenucarrito.css';
import { CarritoIcon } from '../Iconos/iconos.jsx';

function CartItem ({ img, precio, nombre, cantidad, Agregar }) {
  return (
    <li>
      <img
        src={img}
        alt={nombre}
      />
      <div>
        <strong>{nombre}</strong> - ${precio}
      </div>
      
      <footer>
        <small>
          Cantidad: {cantidad}
        </small>
        <button onClick={Agregar}>+</button>
      </footer>
    </li>
  )
}

const SideMenuCarrito = () => {
  const cartCheckboxId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId} onClick={toggleMenu}>
        <CarritoIcon />
      </label>

      <div className={`cart ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <img
              src="/assets/HOMBRE/hb4.jpg"
              alt="hombre"
            />
            <div>
              <strong>nose pero hombre</strong> - $1600
            </div>

            <footer>
              <small>
                Cantidad: 1
              </small>
              <button>+</button>
              <button>-</button>
            </footer>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenuCarrito;
/*
const [count, setCount] = useState(0)

const [estaAbierto, abrirMenuCostado] = useState(false)
const abiertoMenuCostado = () => abrirMenuCostado(true)
const cerrarMenuCostado = () => abrirMenuCostado(false)
*/