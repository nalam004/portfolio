import React from 'react'
import Hive from '../../images/hive.png'
import Vestigia from '../../images/vestigia.png'
import Flicks from '../../images/flicks.gif'
import Photoshare from '../../images/photoshare.gif'
import lifelyhood from '../../images/lifelyhood.gif'
import './Projects.css'
import Item from "./Item";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1200, itemsToShow: 1 },
];

function Projects() {  
    return (
    <>
    <section id="projects">
        <div className="project-container">
            <h1 className="project-heading">Projects</h1>
            <Carousel breakPoints={breakPoints}>
                <Item 
                    title="Lifelyhood"
                    image={lifelyhood}
                    description="React and Django web app that provides workspaces to keep three essential aspects of your life separate and organized."
                ></Item>

                <Item 
                    title="Photoshare"
                    image={Photoshare}
                    description="Django application with a RESTful API that allows authenticated users to post pictures and comment on other users' posts."
                ></Item>

                <Item 
                    title="Flicks"
                    image={Flicks}
                    description="Next.js and React application that displays box office and top rental DVDs using the movie database API."
                ></Item>

                <Item 
                    title="The Hive"
                    image={Hive}
                    description="Python and MySQL system that allows users to create groups for the purpose of working on projects together."
                ></Item>

                <Item 
                    title="Vestigia"
                    image={Vestigia}
                    description = "Python, Flask, and MySQL web app that keeps track of a user’s job applications."
                ></Item>
            </Carousel>
        </div>
    </section>
    </>
  )
}

export default Projects