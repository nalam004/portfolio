import React from 'react'
import './Footer.css'

function Footer() {
    return (
    <>
        <section id='footer'>
            <div className='container'>
                <div className='flex-container'>
                    <ul className='footer-menu'>
                        <li className='footer-item'>
                            <a href="mailto: niharikaalam1234@gmail.com">
                            <img width='40px' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/512/444440/external-email-business-kiranshastry-lineal-kiranshastry.png" alt=""/>
                            </a>
                        </li>
                        
                        <li className='footer-item'>
                            <a href="https://github.com/nalam004">
                            <img width='40px' src="https://img.icons8.com/dotty/512/444440/github.png" alt=""/>
                            </a>
                        </li> 
                        
                        <li className='footer-item'>
                            <a href="https://www.linkedin.com/in/niharika-alam-7ab76b1bb/">
                            <img width='40px' src="https://img.icons8.com/dotty/512/444440/linkedin.png" alt=""/>
                            </a>
                        </li>                
                    </ul> 
                </div>   
                <p style={{color: '#444440'}}>Copyright &copy; 2020 Niharika Alam.  All Rights Reserved</p>
            </div>
        </section> 
    </>
  )
}

export default Footer