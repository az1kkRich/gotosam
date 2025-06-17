import React from 'react'
import { Link } from 'react-router-dom'
import LanguageSelector from '../components/home/selectLang'
import GotosamLogo from '../assets/GotosamLogo.png'
import { useTranslation } from 'react-i18next'


const Header = () => {

  const { t } = useTranslation();

  return (
    <>
      <header id='header' className='max-w-[100vw]'>
        <div className="flex hrgba justify-between md:justify-between items-center py-2 md:py-2! px-7  md:px-5 xl:px-17">

          <div className="hd-title">
            <Link to="/"  >
              <img src={GotosamLogo} className='w-[180px] h-12' alt="" />

            </Link>
          </div>
          <div className='flex  gap-3'>

            <div className='links hidden md:block'>
              <ul className='flex  xl:gap-7  mb-0 '>
                <a href="/#ourTours">
                  <li className='text-amber-300 text-2xl cursor-pointer hover:text-amber-100'>{t("tours")}</li>
                </a>
                
                <a href="/#services">
                  <li className='text-amber-300 text-2xl cursor-pointer hover:text-amber-100'>{t("services")}</li>
                </a>
                <a href="/#galery">
                  <li className='text-amber-300 text-2xl cursor-pointer hover:text-amber-100'>{t("gallery")}</li>
                </a>
                <a href="/#events">
                  <li className='text-amber-300 text-2xl cursor-pointer hover:text-amber-100'>{t("events")}</li>
                </a>
              </ul>
            </div>
              <LanguageSelector />

          </div>
        </div>

      </header>
    </>
  )
}

export default Header
