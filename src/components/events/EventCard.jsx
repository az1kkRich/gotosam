import React, { useEffect, useState } from 'react'
import cardImg from '../../assets/tourists.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { ArrowRightFromLine, GitCommitHorizontal, MapPinCheckInside, MapPinHouse } from 'lucide-react'

const EventCard = () => {

  const [event, setEvent] = useState([])
  const [loader, setLoader] = useState(true);


  const envUrl = import.meta.env.VITE_API_URL

  const currentLang = localStorage.getItem("selectedLanguage")



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${envUrl}/events`)
        setEvent(res.data)
        console.log(res.data);
        setLoader(false)

      } catch (error) {
        console.log(error);

      }
    }

    fetchData()
  }, [])

  const { t } = useTranslation()
  return (
    <>

      {loader && (
        <>

          <div className="col-md-6 col-xl-4 mb-3">
            <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
              <div className="w-full h-[200px] bg-gray-300 rounded"></div>
              <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
              <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">

              </div>
            </div>

          </div>
          <div className="col-md-6 col-xl-4 mb-3">
            <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
              <div className="w-full h-[200px] bg-gray-300 rounded"></div>
              <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
              <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">

              </div>
            </div>

          </div>
          <div className="col-md-6 col-xl-4 mb-3">
            <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
              <div className="w-full h-[200px] bg-gray-300 rounded"></div>
              <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
              <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">

              </div>
            </div>

          </div>

        </>

      )}

      {!loader && event.map((evnt) => (

        <div className="col-md-6 col-xl-4 mb-3">

          <div className="tourcard m-1  border rounded shadow-sm bg-white">
            <img src={evnt.imagePath} className='w-full h-[200px]' alt="..." />

            <div className="flex w-full">
              {/* Start Date */}
              <div className="w-[12.5%] my-2">
                <h3 className='text-center font-extrabold font-mono text-yellow-400'>
                  {evnt?.startDate
                    ? new Date(evnt.startDate).toLocaleString(currentLang, { month: 'short' }).toLocaleUpperCase()
                    : '---'}
                </h3>
                <h1 className='text-center text-blue-800 font-mono text-2xl font-bold scale-y-[1.6] my-2 '>
                  {evnt?.startDate
                    ? new Date(evnt.startDate).getDate()
                    : '--'}
                </h1>
              </div>

              {/* Main Content */}
              <div className="w-[75%] my-2">
                <div className="flex justify-between items-center">
                  <p className='font-mono font-semibold'>
                    {evnt?.startDate
                      ? new Date(evnt.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      : '--:--'}
                  </p>
                  <GitCommitHorizontal size={26} color="#009dff" strokeWidth={1.5} />
                  <p className='font-mono font-semibold'>
                    {evnt?.endDate
                      ? new Date(evnt.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      : '--:--'}
                  </p>
                </div>
                <Link to={`/events/${evnt?._id}`} className='w-2/5 md:w-full xl:w-1/3'>
                  <h1 className='mt-0 text-2xl text-blue-700 break-words font-semibold font-mono hover:text-blue-500 hover:underline'>
                    {evnt?.title?.[currentLang] || 'No title'}
                  </h1>
                </Link>
              </div>

              {/* End Date */}
              <div className="w-[12.5%] my-2">
                <h3 className='text-center font-extrabold font-mono text-yellow-400'>
                  {evnt?.endDate
                    ? new Date(evnt.endDate).toLocaleString(currentLang, { month: 'short' }).toLocaleUpperCase()
                    : '---'}
                </h3>
                <h1 className='text-center text-blue-800 font-mono text-2xl font-bold scale-y-[1.6] my-2 '>
                  {evnt?.endDate
                    ? new Date(evnt.endDate).getDate()
                    : '--'}
                </h1>
              </div>
            </div>



          </div>
        </div>
      ))}

    </>
  )
}

export default EventCard
