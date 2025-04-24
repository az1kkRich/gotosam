import React from 'react'
import './home.css'

const HomeSlider = () => {
    return (
        <>
            <div className="slidediv" id='home'>
                <div className="rgba-color">

                    <div className="text-div">

                        <h1 className='text-home '>Welcome to GotoSamarkand.com</h1>
                    </div>
                    <div className="text-div">
                        <p className='text-p-home  mt-4'>Biz bilan tour paket topishingiz oson!</p>

                    </div>
                    <a href="#ourTours" className='hidden md:block'>

                        <button className ='home-btn'>See Tours</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomeSlider
