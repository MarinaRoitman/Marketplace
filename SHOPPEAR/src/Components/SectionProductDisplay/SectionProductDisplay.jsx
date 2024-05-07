import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/card";
import "./SectionProductDisplay.css"
const SectionProductDisplay = ({}) => {
  const [productos, setProductos] = useState([]);
  const products = useSelector((state) => state.products.products);
  //console.log(products);
  return (
    <div className="productos">
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

export default SectionProductDisplay;
