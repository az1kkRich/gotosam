import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import Tour from './Tour'
import Services from '../components/services/Services'
import Galery from '../components/galery/Galery'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Tour />
      <Services />
      <Galery   />
    </>
  )
}

export default Home
