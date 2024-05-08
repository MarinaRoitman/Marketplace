import React, { useEffect, useState } from 'react';
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

const cardCarrito = ({id, name, price, rate, img, mount, deleteProduct}) => {
  const dispatch = useDispatch();
  const currentProducts = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
  console.log("ola", currentProducts)
  }, [currentProducts]);
  
  const [cant, setCant] = useState(mount);

  const handleClickMount = () => {
    const isProductInCart = currentProducts.find((item) => item.id === id);
    const product = products.find((item) => item.id === id)
    const cartProduct = currentProducts.find((item) => item.id === id)
    console.log("maruru uwu", cartProduct)
    if (product.stock > 0){
        if(cant <= product.stock){
        const newProducts = currentProducts.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              mount: cant,
            };
          } else return product;
        });
        dispatch(editExistingProduct(newProducts));
      }
    } else {
      <ModalError></ModalError>;
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
            <button className='trashButtonStyle' onClick={() => deleteProduct(id)}><BasuraIcon className="trashStyle"  width="24" height="24"/></button>
          </div>
          <div>
            <p>${price}</p>
          </div>
          <BotonCantidad mount={mount} setMount={setCant} onClick={handleClickMount}/>

        </Card.Body>
      </div>
    </Card>
  );
};

export default cardCarrito;