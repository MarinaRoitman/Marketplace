import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/card";

const hombre = ({}) => {
  const [productos, setProductos] = useState([]);
  const products = useSelector((state) => state.products.products).filter((item) => item.categoria == "hombres");
  //console.log(products);
  return (
    <div>
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

export default hombre;