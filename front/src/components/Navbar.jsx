import React from 'react'
import './navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About'
import logo from '../assets/logo.svg'

const Navbar = () => {
    
  return (
    <div>
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
      <li>
          <Link to="/">Ana səhifə</Link>
        </li>
        <li>
          <Link to="/about">Haqqımızda</Link>
        </li>
        <li>
          <Link to="/menu">Menyu</Link>
        </li>
        <li>
          <Link to="/wine">Şərab</Link>
        </li>
      </ul>
      <div className="btn">
        <button><Link to="/book">Yer rezerve edin</Link></button>
      </div>
    </div>
  </div>
  )
}

export default Navbar