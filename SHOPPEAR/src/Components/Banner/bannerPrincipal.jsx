import React from 'react'
import './banner.css'
import banner1 from '/assets/ofertaBanner.svg';
import banner2 from '/assets/ofertaBanner2.svg';
import banner3 from '/assets/ofertaBanner3.svg';
import Carousel from 'react-bootstrap/Carousel';

const banner = () => {
return (
    <div className="banner"> 
        <Carousel className='cambiarBotones'>
            <Carousel.Item>
                <img src={banner1} alt="Primera slide" className='bannerSize'/>
            </Carousel.Item>

            <Carousel.Item>
                <img src={banner2} alt="Segunda slide" className='bannerSize'/>
            </Carousel.Item>

            <Carousel.Item>
                <img src={banner3} alt="Tercera slide" className='bannerSize'/>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default banner