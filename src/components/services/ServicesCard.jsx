import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next'
import axios from 'axios'


const ServicesCard = () => {


  const [service, setService] = useState([])
  const [loader, setLoader] = useState(true);


  const envUrl = import.meta.env.VITE_API_URL

  const currentLang = localStorage.getItem("selectedLanguage")



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${envUrl}/services`)
        setService(res.data);
        setLoader(false);

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
        <div className="col-md-4 col-xl-3 mb-3">
            <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
              <div className="w-full h-[200px] bg-gray-300 rounded"></div>
              <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
              <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">

              </div>
            </div>

          </div>
          <div className="col-md-4 col-xl-3 mb-3">
            <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
              <div className="w-full h-[200px] bg-gray-300 rounded"></div>
              <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
              <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">

              </div>
            </div>

          </div>
          <div className="col-md-4 col-xl-3 mb-3">
            <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
              <div className="w-full h-[200px] bg-gray-300 rounded"></div>
              <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
              <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">

              </div>
            </div>

          </div>
          <div className="col-md-4 col-xl-3 mb-3">
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

    {!loader && service.map((ser) => (
        <div className='col-md-4 col-xl-3 mb-3' key={ser._id}>
          <div className="m-1  border rounded shadow-sm hover:shadow-lg! bg-white">
            <img src={ser.imagePath} alt="This is services img" className='w-full h-[10rem]' />
            <div className="my-3 mx-4 flex flex-col justify-center items-center">
              <h1 className=' text-2xl text-amber-700 font-medium text-center' >{ser.title[currentLang]}</h1>
              <p className='text-center'>{ser.description[currentLang]}</p>
              <Link to={`service/${ser._id}`}>
                <button className='btn btn-outline-success w-fit mt-3'>{t("more")}</button>
              
              </Link>
            </div>
          </div>
        </div>

    ))}
    
    </>
  )
}

export default ServicesCard
