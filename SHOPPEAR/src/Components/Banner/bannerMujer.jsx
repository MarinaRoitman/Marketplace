import React from 'react'
import './banner.css'
import Carousel from 'react-bootstrap/Carousel';
import bannerM from '/assets/bannerMujer.svg';

const bannerMujer = () => {
return (
    <div className="banner"> 
        <Carousel className='noButtons'>
            <Carousel.Item>
                <img src={bannerM} alt="Primera slide" className='bannerSize' style={{marginBottom:'3em'}}/>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default bannerMujer