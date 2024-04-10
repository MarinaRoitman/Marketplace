import React from 'react';
import Banner from '../../Components/Banner/banner';
import Card from '../../Components/Card/card';
import data from '../../../JSONs/productos.json';


function menuPrincipal() {

    const [carrito, setCarrito] = useState([]);
    useEffect(() => {
        setCarrito(data);
    }, []);

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