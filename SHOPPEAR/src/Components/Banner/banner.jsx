import React from 'react'
import './banner.css'
import Carousel from 'react-bootstrap/Carousel';


const Banner = (props) => {
    const {imgSrc} = props;
return (
    <div className="banner"> 
        <Carousel className='noButtons'>
            <Carousel.Item>
                <img src={imgSrc} alt="Primera slide" className='bannerSize' style={{marginBottom:'3em'}}/>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default Banner;