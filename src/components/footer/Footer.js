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
                        <a href="mailto: niharikaalam1234@gmail.com">
                        <img src="https://img.icons8.com/dusk/512/000000/apple-mail.png" alt="" class="nav-link" />
                        </a>
                    </li>
                    
                    <li className='footer-item'>
                        <a href="https://github.com/nalam004">
                        <img src="https://img.icons8.com/dusk/512/000000/github.png" alt="" class="nav-link" />
                        </a>
                    </li> 
                    
                    <li className='footer-item'>
                        <a href="https://www.linkedin.com/in/niharika-alam-7ab76b1bb/">
                        <img src="https://img.icons8.com/dusk/512/000000/linkedin.png" alt="" class="nav-link" />
                        </a>
                    </li>                
                </ul>    
            </div>
        </section> 
    </>
  )
}

export default Footer