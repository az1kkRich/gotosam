import React from "react";
import ServicesSlider from "./ServicesSlider";

const Services = () => {
 


    return (
        <>
            <div className="bg-amber-50 py-3 scroll-mt-17 " id="services">
                <h1 className='text-center text-4xl mb-4 underline text-red-500 font-bold'> 𝑿𝒊𝒛𝒎𝒂𝒕𝒍𝒂𝒓</h1>

                <div className="container">
                    <ServicesSlider />

                </div>


            </div>
        </>
    )
}

export default Services
