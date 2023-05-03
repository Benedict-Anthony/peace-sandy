import React from 'react'
import { Link } from "react-router-dom"
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <nav className='sticky'>
      <h1>PeaceSandy</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar