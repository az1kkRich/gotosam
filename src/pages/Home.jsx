import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import Services from '../components/services/Services'
import Galery from '../components/galery/Galery'
import Tour from '../components/tours/Tour'
import Events from '../components/events/Events'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Tour />
      <Services />
      <Galery   />
      <Events />
    </>
  )
}

export default Home
