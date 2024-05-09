import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/card";
import Banner from "../../Components/Banner/bannerMujer.jsx";
import { useParams } from 'react-router-dom';

const ProductosFiltrados = ({}) => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  const products = useSelector((state) => state.search.productosFiltrados);
  
  useEffect(() => {
    setProductos(products.filter((item) => item.categoria == category));
  }, [category]);
  
  
  //console.log(products);
  return (
    <div>
      <Banner style={{marginTop:'4em'}}/>
      <div style={{display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '7px',
      justifyContent: 'center'}}>
        {productos.length &&
          productos.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.nombre}
              price={product.precio}
              rate={product.rating}
              img={product.img}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductosFiltrados;