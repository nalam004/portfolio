import React from 'react'
import './Experience.css'

function Experience() {  
    return (
    <>
            <main className="experience-container">
                <h2 className="exp-heading">Work Experience</h2>        
                <section className="job">
                    <h3 className="work-heading">
                        <span className="work-title">DOE Tech Support Intern </span>&#8211; 
                        <span className="work-location"> Research Foundation of CUNY</span>
                        <small className="work-duration">Sep 2020 - Present</small></h3>
                    <ul className="work-details">
                        <li className="detail-item">Managing data tracking systems and creating online systems via Google forms/sheets.</li>
                        <li className="detail-item">Assisting in the setup of new computer equipment and installing software.</li>
                        <li className="detail-item">Ensuring that projectors, smart boards, and printers are functioning.</li>
                        <li className="detail-item">Configuring wireless devices to access the DOE network onsite.</li>
                        <li className="detail-item">Troubleshooting hardware and software problems.</li>
                    </ul>
                </section>

                <section className="job">
                    <h3 className="work-heading">
                        <span className="work-title">Product Design Intern </span>&#8211; 
                        <span className="work-location"> SYEP Summer Bridge Program</span>
                        <small className="work-duration">Jun 2020 - Aug 2020</small></h3>
                    <ul className="work-details">
                        <li className="detail-item">Formed a team to create a product that protects against the spread of the Covid-19 virus and raise awareness of colorism.</li>
                        <li className="detail-item">Designed a logo for products using Adobe Photoshop.</li>
                        <li className="detail-item">Built a website to sell products.</li>
                    </ul>
                </section>

                <section className="job">
                    <h3 className="work-heading">            
                        <span className="work-title">Wintern </span>&#8211; 
                        <span className="work-location"> Simons Foundation</span>
                        <small className="work-duration">Jan 2018 - Feb 2018</small></h3>
                    <ul className="work-details">
                        <li className="detail-item">Implemented changes to fix bugs on the company website using Eclipse, C++, and GitHub.</li>
                        <li className="detail-item">Shadowed IT department, data engineers, and software engineers.</li>
                        <li className="detail-item">Networked with math and science researchers at the Flatiron Institute.</li>
                        <li className="detail-item">Participated in meetings with web developers and executives.</li>
                        <li className="detail-item">Participated in graphic design workshops at Fjord Design studio and Accenture Liquid Studio.</li>
                    </ul>
                </section>
            </main>
    </>
  )
}

export default Experience
