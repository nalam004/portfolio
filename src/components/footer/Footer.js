import React from 'react'
import './Footer.css'

function Footer() {
    return (
    <>
        <section className='footer'>
            <div className='footer-container'>
                <p>&copy; 2020 Niharika Alam.  All Rights Reserved</p>                             
                <ul className='footer-menu'>
                    <li className='footer-item'>
                        <img src="https://img.icons8.com/dusk/512/000000/apple-mail.png" alt="" class="nav-link" />
                    </li>
                    
                    <li className='footer-item'>
                        <img src="https://img.icons8.com/dusk/512/000000/github.png" alt="" class="nav-link" />
                    </li> 
                    
                    <li className='footer-item'>
                        <img src="https://img.icons8.com/dusk/512/000000/linkedin.png" alt="" class="nav-link" />
                    </li>                
                </ul>    
            </div>
        </section> 
    </>
  )
}

export default Footer