import React from 'react'
import AutoPlayGalery from './AutoPlayGalery'
import { useTranslation } from 'react-i18next'

const Galery = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="bg-cyan-100 py-3 scroll-mt-17 " id='galery'>
                <h1 className='text-center text-4xl mb-4 italic underline text-red-500 font-bold'> {t("gallery")} </h1>


                <AutoPlayGalery />

            </div>
        </>
    )
}

export default Galery
