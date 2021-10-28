import React, { useState, useEffect } from 'react'
import './Nav.css'; 

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollState !== "not_top") {
                    setScrollState("not_top")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])
 
    return (
    <>
            <nav className='navbar' style={{boxShadow: scrollState === "top" ? "none" : "0 9px 0px -6px #444440"}}>
                  <div className='nav-container'>
                            
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                            
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>   
                                    <a className='nav-link' onClick={closeMobileMenu} href="#about">About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' onClick={closeMobileMenu} href="#skills">Skills</a>    
                                </li> 
                                <li className='nav-item'>
                                    <a className='nav-link' onClick={closeMobileMenu} href="#projects">Projects</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' onClick={closeMobileMenu} href="#experience">Experience</a>
                                </li>
                            </ul>    
                        </div>
            </nav> 
    </>
  )
}

export default Nav