import React from 'react'
import TourCard from './TourCard'

const Tour = () => {
    return (
        <>
            <div className=" bg-emerald-100 py-3 scroll-mt-17" id='ourTours'>
                <h1 className='text-center text-4xl mb-4 underline text-red-500 font-bold'> 𝑻𝒐𝒖𝒓 𝑷𝒂𝒌𝒆𝒕𝒍𝒂𝒓</h1>
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
