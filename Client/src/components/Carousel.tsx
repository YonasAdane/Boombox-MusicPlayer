import React from 'react'

import Slider from "react-slick"
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CrouselProps{
  children:any;
}
const Carousel: React.FC<CrouselProps>=({children})=>{
    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default Carousel

