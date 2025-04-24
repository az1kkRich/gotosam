import React from 'react'
import AutoPlayGalery from './AutoPlayGalery'

const Galery = () => {
    return (
        <>
            <div className="bg-amber-50 py-3 ">
                <h1 className='text-center text-4xl mb-4 underline text-red-500 font-bold'> 𝑮𝒂𝒍𝒆𝒓𝒊𝒚𝒂</h1>

                <div className="container">
                    <AutoPlayGalery />

                </div>


            </div>
        </>
    )
}

export default Galery
