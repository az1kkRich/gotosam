import React from 'react'
import './home.css'
import { useTranslation } from 'react-i18next';


const HomeSlider = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="slidediv" id='home'>
                <div className="rgba-color">

                    <div className="text-div">

                        <h1 className='text-home '>Welcome to GotoSamarkang.com</h1>
                    </div>
                    <div className="text-div">
                        <p className='text-p-home  mt-4'>{t("headerTarif")}!</p>
                    </div>
                    <a href="#ourTours" className='hidden md:block'>

                        <button className ='home-btn'>{t("seeTours")}</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomeSlider
