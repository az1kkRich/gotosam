import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <header  id='header' className='max-w-[100vw]'>
        <div className="flex hrgba justify-center md:justify-between items-center py-2 md:py-4! px-7  md:px-5 xl:px-17">
          
          <div className="hd-title">
            <Link to="/"  >
              <h1 className='text-amber-300 text-4xl text-center logotext md:text-start cursor-pointer'>𝔾𝕠𝕋𝕠𝕊𝕒𝕞𝕒𝕣𝕜𝕒𝕟𝕕</h1>

            </Link>
          </div>
          <div className='links hidden md:block'>
            <ul className='flex  xl:gap-7  mb-0 '>
              <a  href="/#ourTours">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Tourlar</li>
              </a>
              <a  to="#">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>HomeStays</li>
              </a>
              <a  href="/#services">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Xizmatlar</li>
              </a>
              <a  href="/#galery">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Galeriya</li>
              </a>
              <a  href="/#events">
                <li className='text-amber-300 text-xl cursor-pointer hover:text-amber-100'>Eventlar</li>
              </a>
            </ul>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header
