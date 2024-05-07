import React from 'react'
import './banner.css'
import bannerE from '/assets/bannerElectronica.svg';
import Carousel from 'react-bootstrap/Carousel';

const bannerElectronica = () => {
return (
    <div className="banner"> 
        <Carousel className='noButtons'>
            <Carousel.Item>
                <img src={bannerE} alt="Primera slide" className='bannerSize' style={{marginBottom:'3em'}}/>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default bannerElectronica;