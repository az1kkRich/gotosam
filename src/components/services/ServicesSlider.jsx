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
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
          {
            breakpoint: 1024, // 1024px dan kichik ekranlarda
            settings: {
              slidesToShow: 2,
              centerPadding: "40px",
            }
          },
          {
            breakpoint: 640, // 640px dan kichik (telefonlarda)
            settings: {
              slidesToShow: 1,
              centerPadding: "20px",
            }
          }
        ]
      };
      


    return (
        <div className="slider-container mx-3">
            <Slider {...settings}>
                <div>

                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        


                    </div>

                </div>
                <div>

                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        


                    </div>
                </div>
                <div>
                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <img src={cardImg} className='img-fluid' alt="..." />
                        <h4 className='mt-2 text-emerald-900' > One-day Tour to Samarkand from Tashkent</h4>
                        


                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ServicesSlider
