import React from 'react'
import TourCard from './TourCard'
import { useTranslation } from 'react-i18next'

const Tour = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className=" bg-emerald-100 py-3 scroll-mt-17" id='ourTours'>
                <h1 className='text-center text-4xl italic mb-4 underline text-red-500 font-bold'> {t("tours")} </h1>
                <div className="container">
                    <div className="row">
                        <TourCard />
                        <TourCard />
                        <TourCard />
                        <TourCard />
                        <TourCard />
                        <TourCard />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Tour
