import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/card";

const electronica = ({}) => {
  const [productos, setProductos] = useState([]);
  const products = useSelector((state) => state.search.productosFiltrados).filter((item) => item.categoria == "tecnologia");
  //console.log(products);
  return (
    <div style={{display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '7px',
    justifyContent: 'center'}}>
      {products.length &&
        products.map((product) => (
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
  );
};

export default electronica;