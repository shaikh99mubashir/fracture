import React from 'react'
import './Header.css';
import logo  from '../images/logo.png';
import union  from '../images/Union.png';
import Wallet from './Wallet';
const Header = ({cartCount}) => {
  return (
      <nav class="navbar navbar-expand-lg" >
        <div class="container">
        <div className="col-12 header ">
          <div className="col-3 d-flex ">
          <strong className='cont'>CONTACT</strong>
          <strong className='faq'>FAQ</strong>
        </div>
        <div className="col-3">
        <img src={logo} alt="" className='logo' />
        </div>
        <div className="col-3 d-flex" >
          {/* <button className='me-2 px-4 button'>CONNECT</button>
          < */}
          <Wallet />
          <div className='ms-2 d-flex'>
            <button className='button1'><img src={union} alt=""  className='buttonl'/></button>
            <button className='button2'>{cartCount}</button>
          </div>
        </div>
      </div>
        </div>
      </nav>
  )
}

export default Header