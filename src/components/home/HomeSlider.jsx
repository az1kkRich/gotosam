import React from 'react'
import './home.css'

const HomeSlider = () => {
    return (
        <>
            <div className="slidediv">
                <div className="rgba-color">

                    <div className="text-div">

                        <h1 className='text-home text-6xl'>Welcome to GotoSamarkand.com</h1>
                    </div>
                    <div className="text-div">
                        <p className='text-p-home text-2xl mt-4'>Biz bilan tour paket topishingiz oson!</p>

                    </div>
                    <button className='home-btn'>See Tours</button>
                </div>
            </div>
        </>
    )
}

export default HomeSlider
