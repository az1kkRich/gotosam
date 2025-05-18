import React from 'react'
import carservices from "../../assets/carservics.png"
import { useTranslation } from 'react-i18next'


const ServicesCard = () => {

    const {t} = useTranslation()


  return (
    <div className='col-md-4 col-xl-3 mb-3'>
      <div className="m-1  border rounded shadow-sm hover:shadow-lg! bg-white">
        <img src={carservices} alt="This is services img" className='w-full h-[10rem]' />
        <div className="my-3 mx-4 flex flex-col justify-center items-center">
            <h1 className=' text-2xl text-amber-700 font-medium text-center' >Car services</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectet ur, adipisicing elit. Sequi, eius.</p>
            <button className='btn btn-outline-primary w-fit mt-3'>{t("more")}</button>
        </div>  
      </div>
    </div>
  )
}

export default ServicesCard
