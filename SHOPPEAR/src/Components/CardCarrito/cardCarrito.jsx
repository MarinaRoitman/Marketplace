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
  console.log("pp", currentProducts)
  }, [currentProducts]);
  
  const [cant, setCant] = useState(mount);

  const handleClickMount = (value) => {
    const isProductInCart = currentProducts.find((item) => item.id === id);
    const product = products.find((item) => item.id === id)
    const cartProduct = currentProducts.find((item) => item.id === id)
    console.log("prueba:", cartProduct)

    if (product.stock > 0){
        if(value <= product.stock){ //cant toma el valor del botonCantidad, ya tiene el valor nuevo
        const newProducts = currentProducts.map((item) => {
          if (item.id === id) {
            setCant(value)
            return {
              ...item,
              mount: value,
            };
          } else return item; //devuelve el item intacto a la lista de newProducts
        });
        dispatch(editExistingProduct(newProducts));
      } else {
        setCant(mount) //devuelvo a cant al valor de mount, que no puede pasar del stock maximo
        console.log("after set: ", cant)
      }
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
          <BotonCantidad mount={cant} setMount={setCant} onClick={handleClickMount}/>

        </Card.Body>
      </div>
    </Card>
  );
};

export default cardCarrito;