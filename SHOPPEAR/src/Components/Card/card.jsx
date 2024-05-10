import React, { useEffect } from "react";
import "./card.css";
import Button from "react-bootstrap/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  editExistingProduct,
} from "../../redux/actions/carrito.actions";
import ModalError from "../ModalError/modalError.jsx";
import { Link } from "react-router-dom";

export const CardComponent = (props) => {
  const { id, name, price, rate, img } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products)
  const currentProducts = useSelector((state) => state.cart.cartItems);

  function addProductInCart() {
    const isProductInCart = currentProducts.find((item) => item.id === id);
    const product = products.find((item) => item.id === id)
    const cartProduct = currentProducts.find((item) => item.id === id)
    if (product.stock > 0){
      if (!isProductInCart)
        dispatch(addToCart({ id, name, price, rate, img, mount: 1 }));
      else {
        if(cartProduct.mount < product.stock){
        const newProducts = currentProducts.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              mount: product.mount + 1,
            };
          } else return product;
        });
        dispatch(editExistingProduct(newProducts));
      }
    }
    } 
  }

  return (
    <div className="centrar">
      <div className="card-container">
        <Card
          className="styleCard"
          style={{ borderRadius: "2em", width: "18rem", height: "28rem" }}
        >
          <Link to={`/producto/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <CardMedia
              component="img"
              height="400"
              src={img}
              className="card-image"
            />
            <CardContent>
              <div className="card-text" >
                <p style={{ textAlign: 'center',fontWeight: 'bold'}}>{name}</p>
                <p style={{ textAlign: 'center' }}>${price}</p>
                <p style={{ textAlign: 'center' }}>{rate}</p>
              </div>
            </CardContent>
          </Link>
          <div>
            <Button
              className="moreButton"
              size="small"
              onClick={addProductInCart}
              variant="dark"
            >
              <p>+</p>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;