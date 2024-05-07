import React from 'react'
import './banner.css'
import bannerH from '/assets/bannerNiños.svg';
import Carousel from 'react-bootstrap/Carousel';

const bannerHombre = () => {
return (
    <div className="banner"> 
        <Carousel className='noButtons'>
            <Carousel.Item>
                <img src={bannerH} alt="Primera slide" className='bannerSize' style={{marginBottom:'3em'}}/>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default bannerHombre;