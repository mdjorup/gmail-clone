import React, {useState} from 'react'
import "../css/RightSidebar.css";
import {IconContext} from 'react-icons';
import {BsCalendarDate} from 'react-icons/bs'
import {GoLightBulb} from 'react-icons/go'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {RiAccountCircleLine} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'

function RightSidebar() {

    return (
        <div className='right_sidebar'>

            <IconContext.Provider value={{className: "icon", size: 30, color: 'gray'}}>
                <BsCalendarDate />
                <GoLightBulb />
                <IoMdCheckmarkCircleOutline />
                <RiAccountCircleLine />
                <p className='underscore'>__</p>
                <AiOutlinePlus />
            </IconContext.Provider>

        </div>
    )
}

export default RightSidebar