import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import img from '/assets/MUJER/mj13.jpg';
import BotonCantidad from '../../Components/BotonCantidad/botonCantidad';
import './prueba.css'
import {
    addToCart,
    editExistingProduct,
  } from "../../redux/actions/carrito.actions";


const Prueba = () => {
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
    
    console.log("detailed product", detailedProduct)

    function addProductInCart() {
        const isProductInCart = currentProducts.find((item) => item.id === id);
        const intID = parseInt(id)
        if (!isProductInCart)
        dispatch(addToCart({ intID, nombre, precio, rating, img, mount: 1 })); // POR QUE LLEGA BIEN LOS DATOS AL CARRITO, PERO EL MENU LLEGA CUALQUIER COSA???
        else {
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

    return (
        <div className="product-detail-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '4em' }}>
            <div className="product-imagen">
                <img src={img} alt='img' />
            </div>
            <div className="product-info" style={{ marginLeft: '20px', margin: '7em' }}>
                <h2>{nombre}</h2>
                <p className="product-descripcion">{descripcion}</p>
                <p className="product-precio">Precio: ${precio}</p>
                <p className="product-precio">{rating}</p>
                <p className="product-precio">Quedan {stock} unidades</p>
                <Button variant='dark' onClick={addProductInCart}>Agregar al carrito</Button>
            </div>
        </div>
    );
}

export default Prueba;