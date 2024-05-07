import React from 'react'
import './banner.css'
import bannerMas from '/assets/bannerMascotas.svg';
import Carousel from 'react-bootstrap/Carousel';

const bannerMascotas = () => {
return (
    <div className="banner"> 
        <Carousel className='noButtons'>
            <Carousel.Item>
                <img src={bannerMas} alt="Primera slide" className='bannerSize'style={{marginBottom:'3em'}}/>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default bannerMascotas;