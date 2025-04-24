import React from 'react'
import cardImg from '../../assets/tourists.jpg'
import { ArrowRightFromLine, MapPinCheckInside, MapPinHouse } from 'lucide-react'

const EventCard = () => {
  return (
    <>
      <div className="col-md-6 col-xl-4 mb-3">

        <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white">
          <img src={cardImg} className='img-fluid' alt="..." />
          <h4 className='mt-2 text-amber-700 text-xl' > One-day Tour to Samarkand from Tashkent</h4>
          <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
          
          <div className="flex justify-content-between items-center gap-2 mt-3 md:block xl:flex">
            <div className='w-3/5 md:w-full xl:w-1/2 xl:border-r-3! border-r-2  md:border-r-0 border-r-red-600'>
              <p className='mb-0 tracking-tighter md:tracking-normal'>Bunda ishtirok etganlar:</p>
              <span className='text-amber-700 text-2xl font-bold '> 33 kishi</span>
            </div>
            <button className='btn btn-primary w-2/5 md:w-full xl:w-1/3 '>Batafsil</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard
