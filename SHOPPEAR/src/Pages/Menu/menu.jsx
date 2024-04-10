import React from 'react';
import Banner from '../../Components/Banner/banner';
import Card from '../../Components/Card/card';
import Cards from '../../Components/Cards/cards';

function menuPrincipal() {
    return (
        <div>
            <Banner />
            <Cards/>
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