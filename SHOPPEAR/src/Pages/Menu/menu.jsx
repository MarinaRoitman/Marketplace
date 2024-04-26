import React from 'react';
import Banner from '../../Components/Banner/banner';
import Cards from '../../Components/Card/card.jsx';

function menuPrincipal() {
    return (
        <div>
            <Banner />
            <div className="titulo-centrado">
                <h2>Nuestros Productos</h2> 
                <div className="hr-container">
                    <hr />
                </div>
            </div> 
            <br />
            <Cards/>
        </div>
    );
}

export default menuPrincipal;
