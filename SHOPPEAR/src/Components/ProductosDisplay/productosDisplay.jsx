import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import './productosDisplay.css'
import { Link } from 'react-router-dom';
import {
    addToCart,
    editExistingProduct,
} from "../../redux/actions/carrito.actions";


const productosDisplay = () => {
    const { searchID } = useParams(); // Obtener el ID del producto de la URL
    const products = useSelector((state) => state.products.products);
    const currentProducts = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    let detailedProduct = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(searchID)) {
            detailedProduct = products[i];
            break;
        }
    }
    if (!detailedProduct) {
        return <div>No se encontró el producto.</div>;
    }
    const { nombre, descripcion, id, precio, stock, img, rating } = detailedProduct;
    
    //console.log("detailed product", detailedProduct)

  function addProductInCart() {
    const isProductInCart = currentProducts.find((item) => item.id === id);
    const product = products.find((item) => item.id === id)
    const cartProduct = currentProducts.find((item) => item.id === id)
    if (product.stock > 0){
      if (!isProductInCart)
        dispatch(addToCart({ id, name: nombre, price: precio, rate: rating, img, mount: 1 }));
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
                    <img src={img} alt='img' style={{Width: '40em', height:'40em'}}/>
                </div>
                <div className="productosAcomodados" style={{ marginLeft: '20px', margin: '9em'}}>
                    <h2>{nombre}</h2>
                    <p className="product-descripcion">{descripcion}</p>
                    <p className="product-precio">Precio: ${precio}</p>
                    <p className="product-precio">{rating}</p>
                    <p className="product-precio">Quedan {stock} unidades</p>
                    <Button variant='dark' onClick={addProductInCart}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    );
}

export default productosDisplay;