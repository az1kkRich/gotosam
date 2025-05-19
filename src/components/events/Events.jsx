import React from 'react'
import EventCard from './EventCard'
import { useTranslation } from 'react-i18next'

const Events = () => {

    const {t} = useTranslation()
    return (
        <>
            <div className="bg-red-100 py-3 scroll-mt-17 " id='events'>
                <h1 className='text-center text-4xl mb-4 underline italic text-red-500 font-bold'> {t("events")} </h1>

                <div className="container">
                    <div className="row">
                        <EventCard />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Events
