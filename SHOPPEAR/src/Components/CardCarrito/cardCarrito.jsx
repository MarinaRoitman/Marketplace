import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './cardCarrito.css';
import Card from 'react-bootstrap/Card';

import { BasuraIcon } from '../Iconos/iconos.jsx';
import BotonCantidad from '../BotonCantidad/botonCantidad.jsx';
import {
  addToCart,
  editExistingProduct,
  removeFromCart,
} from "../../redux/actions/carrito.actions";

const cardCarrito = ({id, name, price, rate, img, mount}) => {
  const dispatch = useDispatch();
  const currentProducts = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
  console.log("ola", currentProducts)
  }, [currentProducts]);

  const deleteProduct = () => {
    //cuando borro al tener mas de un producto se visualiza mal
    const newProducts = currentProducts.filter((product) => product.id !== id);
    dispatch(removeFromCart(newProducts));
  }

  const handleClickMount = (mount) => {
    const isProductInCart = currentProducts.find((item) => item.id === id);
    if (!isProductInCart)
      dispatch(addToCart({ id, name, price, rate, img, mount: 1 }));
    else {
      const newProducts = currentProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            mount
          };
        } else return product;
      });
      dispatch(editExistingProduct(newProducts));
    }
  }

  return (
    <Card className="horizontal-card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <Card.Img src={img} alt="Product" />
        </div>
        <Card.Body>
          <div className="product-info">
            <h5>{name}</h5>
            <button className='trashButtonStyle' onClick={() => deleteProduct()}><BasuraIcon className="trashStyle"  width="24" height="24"/></button>
          </div>
          <div>
            <p>${price}</p>
          </div>
          <BotonCantidad mount={mount} onClick={handleClickMount}/>

        </Card.Body>
      </div>
    </Card>
  );
};

export default cardCarrito;