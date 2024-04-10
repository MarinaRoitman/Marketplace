import React from 'react'
import Card from '../Card/card.jsx';


export default function Cards({productos}) {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
                {productos.map(producto => (
                    <Grid item xs={12} sm={4} md={4} key={producto.id}>
                        <CardComponent producto={producto} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

/*
import CardComponent from './Card';

const Cards = ({ productos }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
                {productos.map(producto => (
                    <Grid item xs={12} sm={4} md={4} key={producto.id}>
                        <CardComponent producto={producto} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Cards;

version martis:
<div>
    {productos.map(producto =>
    <card
    nombre={producto.nombre}
    precio={producto.precio}
    rating={producto.rating}
    img={producto.img}
    />
    )}
</div>
*/