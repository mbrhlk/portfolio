import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.css'

import arrow from '../assets/arrow.svg'

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Marina Braholka</h1>
        <main>
          <h2>Product Designer</h2>
          <h3>Based in Vancouver, BC.</h3>
        </main>
      </header>
      <footer>
        <Link to="/portfolio"><img src={arrow} alt="arrow" /></Link>
      </footer>
    </div>
  )
}

export default Home