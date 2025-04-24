import React from 'react'

const Header = () => {
  return (
    <>
      <header className='flex justify-center md:justify-between items-center bg-amber-950 py-3 px-7  md:px-5 xl:px-17 ' id='header'>
        <div className="hd-title">
          <a href="#home" >
            <h1 className='text-amber-300 text-4xl text-center logotext md:text-start cursor-pointer'>𝔾𝕠𝕋𝕠𝕊𝕒𝕞𝕒𝕣𝕜𝕒𝕟𝕕</h1>

          </a>
        </div>
        <div className='links hidden md:block'>
            <ul className='flex  xl:gap-7  mb-0 '>
              <a href="#ourTours">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Tourlar</li>
              </a>
              <a href="#">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>HomeStays</li>
              </a>
              <a href="#services">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Xizmatlar</li>
              </a>
              <a href="#galery">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Galeriya</li>
              </a>
              <a href="#ourTours">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Eventlar</li>
              </a>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header
