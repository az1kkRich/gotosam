import React from 'react'
import EventCard from './EventCard'

const Events = () => {
    return (
        <>
            <div className="bg-red-100 py-3 scroll-mt-17 " id='galery'>
                <h1 className='text-center text-4xl mb-4 underline text-red-500 font-bold'> 𝑬𝒗𝒆𝒏𝒕𝒍𝒂𝒓</h1>

                <div className="container">
                    <div className="row">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Events
