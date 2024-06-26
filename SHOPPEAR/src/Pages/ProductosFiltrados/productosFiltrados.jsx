import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/card";
import Banner from "../../Components/Banner/banner.jsx";
import { useParams } from 'react-router-dom';
import bannerH from '../../../public/assets/bannerHombre.svg';
import bannerE from '../../../public/assets/bannerElectronica.svg';
import bannerM from '../../../public/assets/bannerMujer.svg';
import bannerN from '../../../public/assets/bannerNiños.svg';
import bannerMas from '../../../public/assets/bannerMascotas.svg';


const ProductosFiltrados = ({}) => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  const products = useSelector((state) => state.search.productosFiltrados);
  const categorias = useSelector((state) => state.products.categories);
  const [imgSrc, setImgSrc] = useState("");

  const categoria = categorias.filter((cat) => cat.nombre == category)
  
  useEffect(() => {
    if (categoria){
      setProductos(products.filter((item) => item.idCategoria == categoria[0].id));
    }
    
    switch (category){
        case "hombres":
            setImgSrc(bannerH);
            break;
        case "mujeres":
            setImgSrc(bannerM);
            break;
        case "mascotas":
            setImgSrc(bannerMas);
            break;
        case "ninos":
            setImgSrc(bannerN);
            break;
        case "tecnologia":
            setImgSrc(bannerE);
            break;
    }
  }, [category, products]);
  
  
  return (
    <div>
      <Banner imgSrc={imgSrc} style={{marginTop:'4em'}}/>
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
              img={product.img}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductosFiltrados;