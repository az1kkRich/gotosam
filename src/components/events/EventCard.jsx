import React from 'react'
import cardImg from '../../assets/tourists.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const EventCard = () => {

  const {t} = useTranslation()
  return (
    <>
      <div className="col-md-6 col-xl-4 mb-3">

        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
          <img src={cardImg} className='w-full h-[200px]' alt="..." />
          <h4 className='mt-2 text-emerald-900 font-semibold text-2xl ' > One-day Tour to Samarkand from Tashkent</h4>
          <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>

          <div className="flex justify-content-between items-center gap-2 mt-2 md:block xl:flex">
            <div className='w-3/5 md:w-full xl:w-1/2 xl:border-r-3! border-r-2  md:border-r-0 border-r-red-600'>
              <p className='mb-0 tracking-tighter  text-emerald-600 md:tracking-normal'>{t("cardInPrice")}:</p>
              <span className='text-red-700 text-2xl font-bold '> <span className='text-sm text-amber-600'>USD</span> 99$ </span>
              
            </div>
            <Link to={'/events/1'} className='w-2/5 md:w-full xl:w-1/3'>
              <button className='btn btn-danger w-full '>{t("more")}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard
