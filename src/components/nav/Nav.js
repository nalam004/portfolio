import React, { useState } from 'react'
import './Nav.css';
import { Link } from 'react-scroll'
import NavLogo from '../../images/nav_logo.png'

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 
    return (
    <>
            <nav className='navbar'>
                  <div className='nav-container'>
                            <Link to="Hero" onClick={closeMobileMenu}>
                                <img className='nav-logo' src={NavLogo} width={45} alt="NavLogo" />
                            </Link> 

                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                            
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <Link to='About' className='nav-link' onClick={closeMobileMenu}>
                                    About
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/skills' className='nav-link' onClick={closeMobileMenu}>
                                    Skills
                                    </Link>
                                </li> 
                                <li className='nav-item'>
                                    <Link to='/projects' className='nav-link' onClick={closeMobileMenu}>
                                    Projects
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/experience' className='nav-link' onClick={closeMobileMenu}>
                                    Experience
                                    </Link>
                                </li>
                            </ul>    
                        </div>
            </nav> 
    </>
  )
}

export default Nav