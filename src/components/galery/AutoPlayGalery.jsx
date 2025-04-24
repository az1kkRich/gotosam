import React from "react";
import Slider from "react-slick";
import "./galery.css"


import img1 from "../../assets/8.+Amir+Timur+Mausoleum.jpg";
import img2 from "../../assets/amirtemur.jpg";
import img3 from "../../assets/Bibikhanum_mosque.jpg";
import img4 from "../../assets/hisor.jpg";
import img5 from "../../assets/urgtg8.jpg";
import img6 from "../../assets/registon.jpg";

function AutoPlayGalery() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={img1} alt=".." className="galery_img " />
                </div>
                <div>
                    <img src={img2} alt=".." className="galery_img" />

                </div>
                <div>
                    <img src={img3} alt=".." className="galery_img" />

                </div>
                <div>
                    <img src={img4} alt=".." className="galery_img" />

                </div>
                <div>
                    <img src={img5} alt=".." className="galery_img" />

                </div>
                <div>
                    <img src={img6} alt=".." className="galery_img" />

                </div>
            </Slider>
        </div>
    );
}

export default AutoPlayGalery;
