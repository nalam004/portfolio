import React from 'react'
import './Experience.css'

function Experience() {  
    return (
    <>
        <section className='experience-section'>
            <div class="experience-header">
                <h1>Experience</h1>  
            </div>
            <div class="container">

                <div class="row feature-item">
                <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                    <h4>DOE Tech Support Intern, Research Foundation of CUNY | Sep 2020 - Present</h4>
                    <ul id="work">
                    <li>Managing data tracking systems and creating online systems via Google forms/sheets.</li>
                    
                    <li>Assisting in the setup of new computer equipment and installing software.</li>
                    
                    <li> Ensuring that projectors, smart boards, and printers are functioning.</li>  
                    </ul>        
                </div>
                </div>

                <div class="row feature-item mt-5 pt-5">
                <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                    <h4>Summer Intern, SYEP Summer Bridge Program | Jun 2020 - Aug 2020</h4>
                    <ul id="work">
                    <li>Formed a team to create a product that protects against the spread of the Covid-19 virus and raise awareness of colorism.</li>
                    
                    <li>Designed a logo for product using Adobe Photoshop.</li>
                    
                    <li>Built a website to sell products.</li>  
                    </ul>  
                </div> 
                </div>
            </div>             
        </section>
    </>
  )
}

export default Experience
