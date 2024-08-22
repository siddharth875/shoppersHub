import React from 'react'
import Slider from 'react-slick'
import {Container} from '../components'

function Carousel({settings, images = [], isSlideShow, className}) {
  return (
    <Container>
    <div className={`${className}`}>
        <Slider {...settings}>
            {images.map((item)=>(
                <div key={item.src}>
                    {item.label && (<label>
                        {item.label}
                    </label>)}
                    <img src={item.src} alt={img.alt} />
                </div>
            ))}
        </Slider>
    </div>
    </Container>
  )
}

export default Carousel




  // const img = [
    //     {
    //         src:"src\assets\fast-food-banner.png",
    //         alt: "fast-food-banner"
    //     },
    //     {
    //         src: "src\assets\grocery-banner.jpg",
    //         alt: "grocery-banner"
    //     }]
    // const settings = {
    //     infinite: true,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     cssEase: "linear",
    //     arrows: false
    //   };