import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Header() {
    const [showHeader, setShowHeader] = useState(false);

    return (
        <div className="header">

            {showHeader ? (
                <RiCloseFill onClick={()=>{setShowHeader(!showHeader)}} className="menu-icon position-fixed top-0 end-0" />
                ) : (
                <RiMenu3Fill onClick={()=>{setShowHeader(!showHeader)}} className="menu-icon position-fixed top-0 end-0" />
                )
            }

            <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
                <li><Link className='header-links'>Home</Link></li>
                <li><Link className='header-links'>Projects</Link></li>
                <li><Link className='header-links'>Courses</Link></li>
                <li><Link className='header-links'>Contact</Link></li>
            </ul>

        </div>
    )
}

export default Header;