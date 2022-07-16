import React from 'react'
import { Link } from 'react-router-dom'
//import logo from './logo/logo.svg'
import logo1 from './logo/logo1.svg'
import './header2.css'

const Header2 = () => {
  return (
    <>
    <header>
      <div className='left_div'>
      <Link to='/comingsoon'> <img src={logo1} alt='logo' className='logo'/></Link>
      </div>
      <div className='center_div'></div>
        <div className='right_div'>
            <ul className='nav_links'>
                <li> <Link to='/about'>About Us</Link></li>
                <li> <Link to='blog'>Blog</Link></li>
                <li><Link to='/github'>GitHub Api</Link></li>
                <li><Link to='/contact' className='cta'><button>contact Us</button></Link></li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Header2

