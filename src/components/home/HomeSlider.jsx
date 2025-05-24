import React, { useLayoutEffect, useState } from 'react'
import './home.css'
import { useTranslation } from 'react-i18next';
import { CalendarHeart, Globe, MapPlus } from 'lucide-react';



const HomeSlider = () => {
    const { t } = useTranslation();
    const [homeIconSize, setHomeIconSize] = useState(50);

    useLayoutEffect(() => {
        function handleResize() {
          const screenW = window.innerWidth;
          if (screenW < 768) {
            setHomeIconSize(20);
          } else if (screenW > 768 && screenW < 1024)
            setHomeIconSize(25);
          else {
            setHomeIconSize(50);
          }
        }
      
        handleResize(); // Dastlabki holat uchun
      
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return (
        <>
            <div className="slidediv" id='home'>
                {/* <div className="rgba-color">

                    <div className="text-div">

                        <img src={HeaderImg} alt="" className='w-[70vw]' />
                        
                        <h1 className='text-home '>GotoSamarkand.com</h1>
                    </div>
                    <div className="text-div">
                        <p className='text-p-home  mt-4'>{t("headerTarif")}!</p>
                    </div>
                    <a href="#ourTours" className='hidden md:block'>

                        <button className ='home-btn'>{t("seeTours")}</button>
                    </a>
                </div> */}

                <div className="w-[95vw] md:w-[85vw] xl:w-[60vw] flex flex-row  ">
                    <div className="w-1/3">
                        <div className="bg-[rgba(34,197,94,0.9)] px-2 pt-1 md:pt-2! md:pb-3! lg:pt-3! lg:pb-4! pb-2 flex flex-col justify-center items-center hover:bg-emerald-700  duration-300">
                            <a href="#ourTours" >
                                <MapPlus size={homeIconSize} color='#c8ff00' className='mx-auto' />
                                <h2 className='text-white text-[7px] md:text-[13px] xl:text-xl font-bold  '>Qulay Tour To'plami</h2>

                            </a>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div
                            className="bg-[rgba(34,197,94,0.9)] px-2 pt-1 md:pt-2! md:pb-3! lg:pt-3! lg:pb-4! pb-2 flex flex-col 
                            justify-center items-center hover:bg-emerald-700  duration-300 border-l border-amber-300 ">
                            <a href="#services" >
                                <Globe size={homeIconSize} color='#c8ff00' className='mx-auto' />
                                <h2 className='text-white text-[7px] md:text-[13px] xl:text-xl font-bold  '>Safaringiz Uchun Xizmatlar</h2>
                            </a>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div
                            className="bg-[rgba(34,197,94,0.9)] px-2 pt-1 md:pt-2! md:pb-3! lg:pt-3! lg:pb-4! pb-2 flex flex-col 
                        justify-center items-center hover:bg-emerald-700  duration-300 border-l border-amber-300">
                            <a href="#events" >
                                <CalendarHeart size={homeIconSize} color='#c8ff00' className='mx-auto' />
                                <h2 className='text-white text-[7px] md:text-[13px] xl:text-xl font-bold  '>Qiziqarli Tadbirlar</h2>

                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeSlider
