import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import '../styles/header.css'

import logo from '../assets/logo.svg'
import dribble from '../assets/dribble.svg'
import linkedin from '../assets/linkedin.svg'

const Header = () => {
  const { pathname } = useLocation();

  const title = (() => {
    switch (pathname) {
      case "/about":
        return <Link to="/fe-portfolio">My Work</Link>
      default:
        return <Link to="/about">About me</Link>;
    }
  })()

  return (
    <header className="main-header">
      <Link to="/"><img src={logo} alt="logo" /></Link>
      {title}
      <nav>
        <ul>
          <li><a href="https://dribbble.com/mabrhlk" target="_blank" rel="noopener noreferrer"><img src={dribble} alt="dribble" /></a></li>
          <li><a href="https://www.linkedin.com/in/marinabraholka" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header