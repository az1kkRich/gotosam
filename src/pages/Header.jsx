import React from 'react'

const Header = () => {
  return (
    <>
      <header className='flex justify-between bg-amber-950 py-5 px-17' id='header'>
        <div className="hd-title">
            <h1 className='text-amber-300 text-4xl cursor-pointer'>𝔾𝕠𝕋𝕠𝕊𝕒𝕞𝕒𝕣𝕜𝕒𝕟𝕕</h1>
        </div>
        <div className='links'>
            <ul className='flex gap-5'>
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Tours</li>
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Homestay</li>
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Silk-Road</li>
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Services</li>
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Events</li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header
