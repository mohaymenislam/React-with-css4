import React, { useState } from 'react';
import Logo from '../images/logo.png'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [click , setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>

            <div className='logo'>
                <img src={Logo} alt='logo'></img>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'><a href='/'>Home</a></li>
               <li className='nav-item'><a href='/'>About</a></li>
               <li className='nav-item'><a href='/'>FAC</a></li>
               <li className='nav-item'><a href='/'>Contact</a></li>

            </ul>

            <div className='hamburger' onClick={handleClick} >

            {click ? (<FaTimes size={30} style={{color: "#f8f8f8"}} ></FaTimes>) : <FaBars size={30} style={{color: "#f8f8f8"}}></FaBars>}

                
            </div>
            
        </div>
    );
};

export default Navbar;