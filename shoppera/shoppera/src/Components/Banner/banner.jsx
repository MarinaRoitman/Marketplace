import React from 'react'
import './banner.css'
import Container from 'react-bootstrap/Container';
import banner1 from '../Images/ofertaBanner.png';
import Carousel from 'react-bootstrap/Carousel';

const banner = () => {
return (
    <div className="banner"> 
        <Carousel className='cambiarBotones'>
            <Carousel.Item>
                <img src={banner1} alt="Primera slide" className='bannerSize'/>
            </Carousel.Item>

            <Carousel.Item>
                <img src={banner1} alt="Segunda slide" className='bannerSize'/>
            </Carousel.Item>

            <Carousel.Item>
                <img src={banner1} alt="Tercera slide" className='bannerSize'/>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default banner