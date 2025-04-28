import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";
import './tour.css'

function TourCardImg() {
  const settings = {
    customPaging: function(i) {
      return (
        <a style={{ width: '100px' }}> 
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb ",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container mb-[5rem]">
      <Slider {...settings}>
        <div>
          <img src={baseUrl + "/abstract01.jpg"} className="tourminiimg" />
        </div>
        <div>
          <img src={baseUrl + "/abstract02.jpg"} className="tourminiimg" />
        </div>
        <div>
          <img src={baseUrl + "/abstract03.jpg"} className="tourminiimg" />
        </div>
        <div>
          <img src={baseUrl + "/abstract04.jpg"} className="tourminiimg" />
        </div>
      </Slider>
    </div>
  );
}

export default TourCardImg;
