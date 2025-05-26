import React from 'react'
import EventCard from './EventCard'
import { useTranslation } from 'react-i18next'

const Events = () => {

    return (
        <>
            <div className="bg-red-100 py-3 scroll-mt-17 " id='events'>
                

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
