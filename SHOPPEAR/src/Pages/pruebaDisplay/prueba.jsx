import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useSelector} from 'react-redux'
import img from '/assets/MUJER/mj13.jpg';


export const prueba = () => {
return (
    <div>
        <div className="product-detail-container" style={{display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '7px',
    justifyContent: 'center'}}>
        <div className="product-imagen">
        <img src={img} alt='img' />

    </div>
    <div className="product-info" style={{display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '7px',
    justifyContent: 'center'}}>
        <h2>nombre</h2>
        <p className="product-descripcion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit mattis diam quis vehicula. Nulla scelerisque diam a porta porttitor. Nam dictum sapien sed venenatis ornare. Proin ullamcorper luctus tellus. Praesent malesuada, nisl eget convallis lobortis, nibh sem tincidunt tortor, eget semper lectus nisi ut eros. Ut dictum tristique vestibulum. Integer dignissim vulputate turpis in mollis. Ut ac felis porttitor, fermentum erat sit amet, molestie nisl. Etiam rhoncus ultricies facilisis. In malesuada massa nulla, ac venenatis purus volutpat in. Donec ac mauris sed tortor rutrum cursus. Sed velit ex, tempus sed dolor ac, bibendum hendrerit urna. Ut vel nulla leo. Maecenas pellentesque enim sit amet sapien consectetur tincidunt. Sed in porttitor erat, pharetra fermentum libero. Mauris semper ipsum ut elit tincidunt lacinia.
        </p>
        <p className="product-precio">Precio: $8000</p>
    </div>
    </div>
    </div>
)
}

export default prueba