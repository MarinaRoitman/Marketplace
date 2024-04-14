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