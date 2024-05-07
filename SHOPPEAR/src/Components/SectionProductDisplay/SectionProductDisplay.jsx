import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/card";
import "./SectionProductDisplay.css"
const SectionProductDisplay = ({}) => {
  const [productos, setProductos] = useState([]);
  const filteredProducts = useSelector((state) => state.search.productosFiltrados);
  //console.log(products);

  return (
    <div className="productos">
      {filteredProducts.length &&
        filteredProducts.map((product) => (
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
