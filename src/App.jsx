import React from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Hero/Carousel';
import { slides } from './data/carouselData.json'

import './app.scss'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      < div >
        <Carousel data={slides} />
      </div >
    </>

  )
}

export default App
