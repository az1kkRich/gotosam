import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import axios from 'axios'


const TourCard = () => {
    const { t } = useTranslation()
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)

    const currentLang = localStorage.getItem("selectedGotosamLanguage")

   
    


    const envUrl = import.meta.env.VITE_API_URL


    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get(`${envUrl}/tours`)
                setTours(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching tours:', error);

            }
        }

        fetchTours()

    }, [])

    

    
    return (
        <>
            {loading && (
                <>
                
                    <div className="col-md-6 col-xl-4 mb-3">
                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
                            <div className="w-full h-[200px] bg-gray-300 rounded"></div>
                            <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
                            <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">
                                <div className="w-3/5 md:w-full xl:w-1/2 xl:border-r-3! border-r-2 md:border-r-0 border-r-red-600">
                                    <div className="mb-0 h-4 bg-gray-300 rounded w-1/3"></div>
                                    <div className="h-6 bg-gray-300 rounded w-1/2 mt-2"></div>
                                </div>
                                <div className="w-2/5 md:w-full xl:w-1/3">
                                    <div className="btn btn-success w-full h-10 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-xl-4 mb-3">
                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
                            <div className="w-full h-[200px] bg-gray-300 rounded"></div>
                            <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
                            <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">
                                <div className="w-3/5 md:w-full xl:w-1/2 xl:border-r-3! border-r-2 md:border-r-0 border-r-red-600">
                                    <div className="mb-0 h-4 bg-gray-300 rounded w-1/3"></div>
                                    <div className="h-6 bg-gray-300 rounded w-1/2 mt-2"></div>
                                </div>
                                <div className="w-2/5 md:w-full xl:w-1/3">
                                    <div className="btn btn-success w-full h-10 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-xl-4 mb-3">
                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
                            <div className="w-full h-[200px] bg-gray-300 rounded"></div>
                            <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
                            <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">
                                <div className="w-3/5 md:w-full xl:w-1/2 xl:border-r-3! border-r-2 md:border-r-0 border-r-red-600">
                                    <div className="mb-0 h-4 bg-gray-300 rounded w-1/3"></div>
                                    <div className="h-6 bg-gray-300 rounded w-1/2 mt-2"></div>
                                </div>
                                <div className="w-2/5 md:w-full xl:w-1/3">
                                    <div className="btn btn-success w-full h-10 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </>

            )}

            {!loading && tours.map((tour) => (

                <div key={tour._id} className="col-md-6 col-xl-4 mb-3">

                    <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                        <div className='overflow-hidden'>
                            <img src={tour.images[0]} className='w-full h-[200px] hover:scale-105 transition-all' alt="..." />

                        </div>
                        <h4 className='mt-2 text-2xl text-amber-700 wrap-break-word font-medium' > {tour.title[currentLang]}</h4>
                        <p className='wrap-break-word'>{tour.shortDescription[currentLang]}</p>
                        
                        <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">
                            <div className='w-3/5 md:w-full xl:w-1/2 xl:border-r-3! border-r-2  md:border-r-0 border-r-red-600'>
                                <p className='mb-0 text-xs md:text-base'>{t("cardInPrice")}:</p>
                                <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>USD</span> {tour.price.adult}$ </span>
                            </div>
                            <Link to={`/tours/${tour._id}`} className='w-2/5 md:w-full xl:w-1/3'>
                                <button className='btn btn-success w-full '>{t("more")}</button>

                            </Link>
                        </div>
                    </div>
                </div>

            ))}



        </>
    )
}

export default TourCard
