import React from 'react'
import cardImg from '../../assets/registon.jpg'
import { ArrowRightFromLine, MapPinCheckInside, MapPinHouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const TourCard = () => {

    const {t} = useTranslation()
    return (
        <>
            
                    <div className="col-md-6 col-xl-4 mb-3">

                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                            <img src={cardImg} className='w-full h-[200px]' alt="..." />
                            <h4 className='mt-2 text-2xl text-amber-700 font-medium' > One-day Tour to Samarkand from Tashkent</h4>
                            <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                            {/* <div className="locationdiv flex items-center justify-between gap-2 xl:gap-4 w-full ">
                                <MapPinHouse size={30} strokeWidth={2.25} color="#62ff00" />
                                <span className='ms-2 font-bold '> Tashkent</span>
                                <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                                <span className='ms-2 font-bold '> Samarqand</span>
                                <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30} />

                            </div> */}
                            <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">
                                <div className='w-3/5 md:w-full xl:w-1/2 xl:border-r-3! border-r-2  md:border-r-0 border-r-red-600'>
                                    <p className='mb-0 text-xs md:text-base'>{t("cardInPrice")}:</p>
                                    <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>USD</span> 99$ </span>
                                </div>
                                <Link to={"/tours/1"} className='w-2/5 md:w-full xl:w-1/3'>
                                    <button className='btn btn-success w-full '>{t("more")}</button>
                                
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                
        </>
    )
}

export default TourCard
