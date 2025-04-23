import React from 'react'
import cardImg from '../../assets/registon.jpg'
import { ArrowRightFromLine, MapPinCheckInside, MapPinHouse } from 'lucide-react'
import './tour.css'

const TourCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="tourcard m-1 px-3 py-4 border rounded bg-white">
                    <img src={cardImg} className='img-fluid' alt="..." />
                    <h4 className='mt-2 text-amber-700' > One-day Tour to Samarkand from Tashkent</h4>
                    <p >One of the most convenient Samarkand tours, this high-speed day trip.</p>
                    <div className="locationdiv">
                        <MapPinHouse  size={30} strokeWidth={2.25} color="#62ff00"/> 
                        <span className='ms-2 font-bold text-md'> Tashkent</span>
                        <ArrowRightFromLine size={18} color="#ffbb00" strokeWidth={2.25} />
                        <span className='ms-2 font-bold text-md'> Samarkand</span>
                        <MapPinCheckInside color="#62ff00" strokeWidth={2.25} size={30}/>

                    </div>
                    <div className="tourcardbtn flex justify-content-between it mt-3">
                        <span className='text-amber-700 font-bold'>  $ 50.00</span>
                        <button className='btn btn-primary'>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">2</div>
            <div className="col-md-4">3</div>
        </div>
      </div>
    </>
  )
}

export default TourCard
