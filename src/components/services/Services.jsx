import React from "react";
import { useTranslation } from "react-i18next";
import ServicesCard from "./ServicesCard";

const Services = () => {
 
    const {t} = useTranslation()

    return (
        <>
            <div className="bg-amber-50 py-3 scroll-mt-17 2xl:px-8 " id="services">
                <h1 className='text-center text-4xl mb-4 underline italic text-red-500 font-bold'> {t("services")} </h1>

                <div className="container">
                    <div className="row">
                        <ServicesCard />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Services
