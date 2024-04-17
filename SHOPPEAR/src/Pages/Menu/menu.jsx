import React from 'react';
import Banner from '../../Components/Banner/banner';
import Cards from '../../Components/Cards/cards';

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
            <Cards/>
        </div>
    );
}

export default menuPrincipal;
