import React from 'react'
import './Hero.css';
import logo from '../../images/logo.svg'

function Hero() {
    return (
        <>
        <div className='hero-container'>
            <img className='logo' src={logo} alt='logo'/>
        </div>
        </>
    )
}
export default Hero;

