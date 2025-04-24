import React from 'react'
import cardImg from '../../assets/registon.jpg'
import { ArrowRightFromLine, MapPinCheckInside, MapPinHouse } from 'lucide-react'


const TourCard = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">

                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                            <img src={cardImg} className='img-fluid' alt="..." />
                            <h4 className='mt-2 text-amber-700' > One-day Tour to Samarkand from Tashkent</h4>
                            <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                            <div className="locationdiv flex items-center justify-between gap-2 md:gap-4 w-full flex-wrap">
                                <MapPinHouse size={30} strokeWidth={2.25} color="#62ff00" />
                                <span className='ms-2 font-bold '> Qoraqalpoq</span>
                                <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                                <span className='ms-2 font-bold '> Samarqand</span>
                                <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30} />

                            </div>
                            <div className="flex justify-content-between items-center mt-3 md:block xl:flex">
                                <div className='w-1/2 md:w-full xl:w-1/2 xl:border-r-3 border-r-2  md:border-r-0 border-r-red-600'>
                                    <p className='mb-0'>Bir kishi uchun narxi:</p>
                                    <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>UZS</span> 1 mln </span>
                                </div>
                                <button className='btn btn-primary w-1/3 md:w-full xl:w-1/3 '>Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">

                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                            <img src={cardImg} className='img-fluid' alt="..." />
                            <h4 className='mt-2 text-amber-700' > One-day Tour to Samarkand from Tashkent</h4>
                            <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                            <div className="locationdiv flex items-center justify-between gap-2 md:gap-4 w-full flex-wrap">
                                <MapPinHouse size={30} strokeWidth={2.25} color="#62ff00" />
                                <span className='ms-2 font-bold '> Qoraqalpoq</span>
                                <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                                <span className='ms-2 font-bold '> Samarqand</span>
                                <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30} />

                            </div>
                            <div className="flex justify-content-between items-center mt-3 md:block xl:flex">
                                <div className='w-1/2 md:w-full xl:w-1/2 xl:border-r-3 border-r-2  md:border-r-0 border-r-red-600'>
                                    <p className='mb-0'>Bir kishi uchun narxi:</p>
                                    <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>UZS</span> 1 mln </span>
                                </div>
                                <button className='btn btn-primary w-1/3 md:w-full xl:w-1/3 '>Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">

                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                            <img src={cardImg} className='img-fluid' alt="..." />
                            <h4 className='mt-2 text-amber-700' > One-day Tour to Samarkand from Tashkent</h4>
                            <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                            <div className="locationdiv flex items-center justify-between gap-2 md:gap-4 w-full flex-wrap">
                                <MapPinHouse size={30} strokeWidth={2.25} color="#62ff00" />
                                <span className='ms-2 font-bold '> Qoraqalpoq</span>
                                <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                                <span className='ms-2 font-bold '> Samarqand</span>
                                <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30} />

                            </div>
                            <div className="flex justify-content-between items-center mt-3 md:block xl:flex">
                                <div className='w-1/2 md:w-full xl:w-1/2 xl:border-r-3 border-r-2  md:border-r-0 border-r-red-600'>
                                    <p className='mb-0'>Bir kishi uchun narxi:</p>
                                    <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>UZS</span> 1 mln </span>
                                </div>
                                <button className='btn btn-primary w-1/3 md:w-full xl:w-1/3 '>Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">

                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                            <img src={cardImg} className='img-fluid' alt="..." />
                            <h4 className='mt-2 text-amber-700' > One-day Tour to Samarkand from Tashkent</h4>
                            <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                            <div className="locationdiv flex items-center justify-between gap-2 md:gap-4 w-full flex-wrap">
                                <MapPinHouse size={30} strokeWidth={2.25} color="#62ff00" />
                                <span className='ms-2 font-bold '> Qoraqalpoq</span>
                                <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                                <span className='ms-2 font-bold '> Samarqand</span>
                                <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30} />

                            </div>
                            <div className="flex justify-content-between items-center mt-3 md:block xl:flex">
                                <div className='w-1/2 md:w-full xl:w-1/2 xl:border-r-3 border-r-2  md:border-r-0 border-r-red-600'>
                                    <p className='mb-0'>Bir kishi uchun narxi:</p>
                                    <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>UZS</span> 1 mln </span>
                                </div>
                                <button className='btn btn-primary w-1/3 md:w-full xl:w-1/3 '>Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">

                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                            <img src={cardImg} className='img-fluid' alt="..." />
                            <h4 className='mt-2 text-amber-700' > One-day Tour to Samarkand from Tashkent</h4>
                            <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                            <div className="locationdiv flex items-center justify-between gap-2 md:gap-4 w-full flex-wrap">
                                <MapPinHouse size={30} strokeWidth={2.25} color="#62ff00" />
                                <span className='ms-2 font-bold '> Qoraqalpoq</span>
                                <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                                <span className='ms-2 font-bold '> Samarqand</span>
                                <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30} />

                            </div>
                            <div className="flex justify-content-between items-center mt-3 md:block xl:flex">
                                <div className='w-1/2 md:w-full xl:w-1/2 xl:border-r-3 border-r-2  md:border-r-0 border-r-red-600'>
                                    <p className='mb-0'>Bir kishi uchun narxi:</p>
                                    <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>UZS</span> 1 mln </span>
                                </div>
                                <button className='btn btn-primary w-1/3 md:w-full xl:w-1/3 '>Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">

                        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
                            <img src={cardImg} className='img-fluid' alt="..." />
                            <h4 className='mt-2 text-amber-700' > One-day Tour to Samarkand from Tashkent</h4>
                            <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                            <div className="locationdiv flex items-center justify-between gap-2 md:gap-4 w-full flex-wrap">
                                <MapPinHouse size={30} strokeWidth={2.25} color="#62ff00" />
                                <span className='ms-2 font-bold '> Qoraqalpoq</span>
                                <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                                <span className='ms-2 font-bold '> Samarqand</span>
                                <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30} />

                            </div>
                            <div className="flex justify-content-between items-center mt-3 md:block xl:flex">
                                <div className='w-1/2 md:w-full xl:w-1/2 xl:border-r-3 border-r-2  md:border-r-0 border-r-red-600'>
                                    <p className='mb-0'>Bir kishi uchun narxi:</p>
                                    <span className='text-amber-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>UZS</span> 1 mln </span>
                                </div>
                                <button className='btn btn-primary w-1/3 md:w-full xl:w-1/3 '>Batafsil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourCard
