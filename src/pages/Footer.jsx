import { Facebook, Instagram, Send, Youtube } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  
  const { t } = useTranslation();
  return (
    <>
      <div id="footer">
        <div className="hrgba">
          <div className="container text-center md:text-start! px-4 pt-4 flex flex-col md:flex-row md:flex-wrap">
            <div className='w-full md:w-2/5 pr-0 md:pr-3'>
              <h3 className='text-xl  text-blue-200'>{t("copyright")}</h3>
              <p className=' text-blue-300'>{t("footerInfo")}</p>

            </div>
            <div className='pl-0 md:pl-3 mt-2 text-xl w-full md:w-1/5!'>
              <a href="#ourTours">
                <p className='text-blue-200'>{t("tours")}</p>
              </a>
              <a href="#services">
                <p className='text-blue-200'>{t("services")}</p>
              </a>
              <a href="#galery">
                <p className='text-blue-200'>{t("gallery")}</p>
              </a>
              <a href="#events">
                <p className='text-blue-200'>{t("events")}</p>
              </a>
            </div>
            <div className=' w-full md:w-2/5'>
              <div className='flex gap-6'>
                <a href="https://www.instagram.com/gotosamarkand/" target="_blank" rel="noreferrer">
                  <Instagram color='yellow' />
                </a>
                <a href="https://www.facebook.com/gotosamarkand/" target="_blank" rel="noreferrer">
                  <Facebook color='yellow' />
                </a>
                <a href="https://www.youtube.com/@gotosamarkand" target="_blank" rel="noreferrer">
                  <Youtube color='yellow' />
                </a>
                <a href="https://t.me/gotosamarkand" target="_blank" rel="noreferrer">
                  <Send color='yellow' />
                </a>
              </div>
              <p className='text-blue-200 mb-3'>{t("followUs")}!</p>
              <div className="row g-3 mb-3 align-items-center">
                
                <div className="col-auto">
                  <input type="text" className="form-control" aria-describedby="passwordHelpInline" placeholder='Send we Messeage!'/>
                </div>
                <div className="col-auto">
                  <button className='btn btn-primary'>Send</button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Footer
