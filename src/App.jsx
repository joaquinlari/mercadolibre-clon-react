import React from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Hero/Carousel';
import Cards from './components/Cards/Cards';
import { slides } from './data/carouselData.json'

import './app.scss'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <article>
        <section>
          <Carousel data={slides} />
        </section>
        <section>
          <Cards />
        </section>
      </article>
    </>

  )
}

export default App
