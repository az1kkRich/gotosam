import { Facebook, Instagram, Send, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="hrgba">
          <div className="container text-center md:text-start! px-4 pt-4 flex flex-col md:flex-row md:flex-wrap">
            <div className='w-full md:w-2/5'>
              <h3 className='text-xl  text-blue-200'>© 2024 GoToSamarkand. All rights reserved.</h3>
              <p className=' text-blue-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, nulla?</p>

            </div>
            <div className='  w-full md:w-1/5!'>
              <a href="#ourTours">
                <p className='text-blue-200'>Our Tours</p>
              </a>
              <a href="#services">
                <p className='text-blue-200'>Services</p>
              </a>
              <a href="#galery">
                <p className='text-blue-200'>Gallery</p>
              </a>
              <a href="#events">
                <p className='text-blue-200'>See all Events</p>
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
              <p className='text-blue-200'>Follow us on social media</p>
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
