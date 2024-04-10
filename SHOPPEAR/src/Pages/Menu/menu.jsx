import React from 'react';
import Banner from '../../Components/Banner/banner';
import Card from '../../Components/Card/card';
import data from '../../../JSONs/productos.json';

const [carrito, setCarrito] = useState([]);

function menuPrincipal() {

    return (
        <div>
            <Banner />
            <Card
                nombre={nombre}
                precio={precio}
                rating={rating}
                img={img}
            />
        </div>
    );
}

export default menuPrincipal;

/*
<div className="titulo-centrado">
    <h2>Productos Destacados</h2> 
    <div className="hr-container">
    <hr />
    </div>
</div> 
*/