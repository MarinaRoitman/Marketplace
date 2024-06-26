import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import './productosDisplay.css'
import { Link } from 'react-router-dom';
import {
    addToCart,
    editExistingProduct,
} from "../../redux/actions/carrito.actions";
import { Row } from "react-bootstrap";
import { accordionDetailsClasses } from "@mui/material";
import { fetchProductoById } from "../../redux/actions/products.actions";


const productosDisplay = () => {
    const { searchID } = useParams(); // Obtener el ID del producto de la URL
    const products = useSelector((state) => state.products.products);
    const currentProducts = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
      fetch("http://localhost:4002/auth/productos/" + parseInt(searchID))
      .then(response => response.json())
      .then(data => {
        setDetailedProduct(data)
      });
    },[searchID]);
    
    const [detailedProduct, setDetailedProduct] = useState()

    useEffect(() => {
      if (detailedProduct && detailedProduct.img) {
          const byteCharacters = atob(detailedProduct.img);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Cambia 'image/jpeg' al tipo correcto
          const imageUrl = URL.createObjectURL(blob);
          setImageSrc(imageUrl);
      }
  }, [detailedProduct]);

    if (!detailedProduct) {
        return <div>No se encontró el producto.</div>;
    }
    
  function addProductInCart() {
    const isProductInCart = currentProducts.find((item) => item.id === detailedProduct.id);
    const product = products.find((item) => item.id === detailedProduct.id)
    const cartProduct = currentProducts.find((item) => item.id === detailedProduct.id)
    if (product.stock > 0){
      if (!isProductInCart)
        dispatch(addToCart({ id: detailedProduct.id, name: detailedProduct.nombre, price: detailedProduct.precio, img: detailedProduct.img, mount: 1, descuento : product.descuento }));
      else {
        if(cartProduct.mount < product.stock){
        const newProducts = currentProducts.map((product) => {
          if (product.id === detailedProduct.id) {
            return {
              ...product,
              mount: product.mount + 1,
            };
          } else return product;
        });
        dispatch(editExistingProduct(newProducts));
      }
    }
    } else {
      <ModalError></ModalError>;
    }
  }

    return (
        <div>
            <Link to="/" className='styleLinkNone'>
                <Button variant='dark' style={{marginLeft:'1em'}}>
                    Volver al Menú
                </Button>
            </Link>
            <div className="product-detail-container" style={{
                display: 'flex',
                flexDirection: 'row', 
                gap: '20px',
                justifyContent:'center',
                alignItems: 'center', 
                margin: '3em' 
            }}>
                <div>
                    <img src={imageSrc} alt='img' style={{Width: '40em', height:'40em'}}/>
                </div>
                <div className="productosAcomodados" style={{ marginLeft: '20px', margin: '9em'}}>
                    <h2>{detailedProduct.nombre}</h2>
                    <p className="product-descripcion">{detailedProduct.descripcion}</p>
                    {detailedProduct.descuento === 0 ? <p className="product-precio">Precio: ${detailedProduct.precio}</p> : <div className="row align-items-center">
                                                                                                                                <p className="product-precio">
                                                                                                                                  Precio: ${detailedProduct.precio * (1 - detailedProduct.descuento / 100)}
                                                                                                                                </p>
                                                                                                                                <p className="product-precio-tachado ms-2">
                                                                                                                                  ${detailedProduct.precio}
                                                                                                                                </p>
                                                                                                                              </div>}
                    <p className="product-precio">Quedan {detailedProduct.stock} unidades</p>
                    <Button variant='dark' onClick={addProductInCart}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    );
}

export default productosDisplay;