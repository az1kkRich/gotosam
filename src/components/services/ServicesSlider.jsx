import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg from '../../assets/registon.jpg'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const ServicesSlider = () => {

    const settings = {
        // centermode 
        className: "center",
        centerMode: true,

        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        //autoplay
        autoplay: true,
        autoplaySpeed: 5000,
        
        // prev next 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };


    return (
        <div className="slider-container ">
            <Slider {...settings}>
                <div>

                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        <p >One of the most convenient Samarkand tours, this high-speed day </p>


                    </div>

                </div>
                <div>

                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        <p >One of the most convenient Samarkand tours, this high-speed day </p>


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        <p >One of the most convenient Samarkand tours, this high-speed day </p>


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        <p >One of the most convenient Samarkand tours, this high-speed day </p>


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        <p >One of the most convenient Samarkand tours, this high-speed day </p>


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        <p >One of the most convenient Samarkand tours, this high-speed day </p>


                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ServicesSlider
