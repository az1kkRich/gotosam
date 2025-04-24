import React from 'react'
import AutoPlayGalery from './AutoPlayGalery'

const Galery = () => {
    return (
        <>
            <div className="bg-emerald-100 py-3 ">
                <h1 className='text-center text-4xl mb-4 underline text-red-500 font-bold'> 𝑮𝒂𝒍𝒆𝒓𝒊𝒚𝒂</h1>


                <AutoPlayGalery />
                <div className=" flex justify-center mt-4">
                    <button className='btn btn-danger p-2  '>Hamma Rasmlarni ko'rish</button>
                </div>

            </div>
        </>
    )
}

export default Galery
