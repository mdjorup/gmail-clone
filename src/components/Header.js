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
        <FaBars size={20} color='gray'/>
        <SiGmail size={30} color='red'/>
        <h3>Gmail</h3>
        
      </div>

      {/* center header */}
      <div className="header__center">

      </div>

      {/* right header */}
      <div className="header__right">
      
        <IconContext.Provider value={{size: 30, color: 'gray'}}>
          <BiHelpCircle />
          <IoMdSettings />
          <IoMdApps />
          <RiAccountCircleLine />
        </IconContext.Provider>

        
      </div>
    </div>
  )
}

export default Header
