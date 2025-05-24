import React from "react";
import Slider from "react-slick";
import './tour.css';

function TourCardImg({ images }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a style={{ width: '100px' }}>
          <img
            src={images[i]}
            alt={`Thumbnail ${i + 1}`}
            style={{ objectFit: 'cover' }}
            className="img-fluid"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container mb-[5rem]">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="tourminiimg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TourCardImg;
