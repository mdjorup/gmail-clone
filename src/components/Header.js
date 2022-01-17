import React from 'react'
import "../css/Header.css";
import {SiGmail} from 'react-icons/si';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {IoMdSettings} from 'react-icons/io'
import {BiHelpCircle} from 'react-icons/bi'
import {IoMdApps} from 'react-icons/io'
import {RiAccountCircleLine} from 'react-icons/ri'


function Header() {


  return (
    <div className='header'>

      {/* left header */}
      <div className="header__left">

        {/* selection icon */}
        <IconContext.Provider value={{ className: 'selection__icon' }}>
          <FaBars />
        </IconContext.Provider>

        {/* gmail icon */}
        <IconContext.Provider value={{ className: 'gmail__icon' }}>
          <SiGmail />
        </IconContext.Provider>

        {/* Gmail text */}
        <p class = "Gmail">Gmail</p>

      </div>

      {/* center header */}
      <div className="header__center">

        

      </div>

      {/* right header */}
      <div className="header__right">
      
        {/* help icon */}
        <IconContext.Provider value={{ className: 'settings__icon' }}>
          <BiHelpCircle />
        </IconContext.Provider>

        {/* settings icon */}
          <IconContext.Provider value={{ className: 'help__icon' }}>
          <IoMdSettings />
        </IconContext.Provider>

        {/* apps icon */}
        <IconContext.Provider value={{ className: 'apps__icon' }}>
          <IoMdApps />
        </IconContext.Provider>

        {/* account icon */}
        <IconContext.Provider value={{ className: 'account__icon' }}>
          <RiAccountCircleLine />
        </IconContext.Provider>
        
      </div>
    </div>
  )
}

export default Header
