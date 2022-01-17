import React from 'react'
import "../css/Header.css";
import {SiGmail} from 'react-icons/si';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Header() {


  return (
    <div className='header'>
      {/* {left header} */}
      <div className="header__left">
        {/* {selection} */}
        <IconContext.Provider value={{ className: 'selection__icon' }}>
          <FaBars />
        </IconContext.Provider>
        {/* {gmail icon} */}
        <IconContext.Provider value={{ className: 'gmail__icon' }}>
          <SiGmail />
        </IconContext.Provider>
        {/* {Gmail} */}
        <p>Gmail</p>
      </div>
      {/* {center header} */}
      <div className="header__center">
        <h3>center</h3>
      </div>
      {/* {right header} */}
      <div className="header__right">
        <h3>right</h3>

      </div>
    </div>
  )
}

export default Header
