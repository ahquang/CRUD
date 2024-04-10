import React from 'react'
import '../../styles/components/_navbar.scss'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <ul className="nav-bar__left">
            <li className="nav-bar__left__brand">My application</li>
            <li className="nav-bar__left__menu">City</li>
            <li className="nav-bar__left__menu">Template</li>
        </ul>
        <ul className="nav-bar__right">
            <li className="nav-bar__right__menu" id='highlight'>Home</li>
            <li className="nav-bar__right__menu">About</li>
            <li className="nav-bar__right__menu">Contact</li>
            <li className="nav-bar__right__menu">Login</li>
        </ul>
    </div>
  )
}

export default NavBar