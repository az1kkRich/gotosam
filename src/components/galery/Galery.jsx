import React from 'react'
import AutoPlayGalery from './AutoPlayGalery'

const Galery = () => {
    return (
        <>
            <div className="bg-emerald-100 py-3 scroll-mt-17 " id='galery'>
                <h1 className='text-center text-4xl mb-4 underline text-red-500 font-bold'> 𝑮𝒂𝒍𝒆𝒓𝒊𝒚𝒂</h1>


                <AutoPlayGalery />
                <div className="mb-5"></div>

            </div>
        </>
    )
}

export default Galery
