import React, {useState} from 'react'
import "../css/Header.css";
import {SiGmail} from 'react-icons/si';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {IoMdSettings} from 'react-icons/io'
import {BiHelpCircle} from 'react-icons/bi'
import {IoMdApps} from 'react-icons/io'
import {RiAccountCircleLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdOptions} from 'react-icons/io';
import {BsCalendarDate} from 'react-icons/bs'
import {GoLightBulb} from 'react-icons/go'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'


function Header() {

  const [searchInput, setSearchInput] = useState(null);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }


  return (
    <div className='header'>

      {/* left header */}
      <div className="header__left">
        <div className='icon'>
          <FaBars size={20} color='gray'/>
        </div>
        <SiGmail size={30} color='red'/>
        <h3>Gmail</h3>
        
      </div>

      {/* center header */}
      <div className="header__center">
        <div className="header__searchbar">
          <AiOutlineSearch size={30} color='#666666'/>
          <input type='text' placeholder='Search mail' value={searchInput} onChange={handleInputChange}></input>
          <IoMdOptions size={30} color='666666'/>
        </div>

      </div>

      {/* right header */}
      <div className="header__right">
      
        <IconContext.Provider value={{className: "icon", size: 30, color: 'gray'}}>
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
