import React from 'react'
import './footer.css'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import social from '../assets/social.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="cont2">
      <img className='logo' src={Logo} alt="" />
      <div className="Menu">
        <ul>
          <li>MENU</li>
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
        <li>
          <Link to="/contact">Əlaqə</Link>
        </li>
        </ul>
      </div>
      <div className="service">
        <ul>
          <li>SERVICE</li>
          <li><a>Pure</a></li>
          <li><a>High Quality</a></li>
          <li><a>Excellent</a></li>
          <li><a>Awesome</a></li>
        </ul>
      </div>
      <div className="social"></div>
      <ul>
        <li>SOCIAL</li>
        <li><img src={social} alt="" /></li>
      </ul>
      </div>
      <div className="line"></div>
      <div className="foot">
        <p>Copyright © 2022 American Steakhouse. All Rights Reserved.</p>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer