import React from 'react'
import Hive from '../../images/hive.png'
import Vestigia from '../../images/vestigia.png'
import Flicks from '../../images/flicks.gif'
import Auctions from '../../images/auctions.gif'
import Photoshare from '../../images/photoshare.gif'
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
                <Item>
                    <img width={500} src={Flicks} alt="" class="" />
                </Item>
                <Item>
                    <img width={500} src={Photoshare} alt="" class="" />
                </Item>
                <Item>
                    <img width={500} src={Auctions} alt="" class="" />
                </Item>
                <Item>
                    <img width={500} src={Vestigia} alt="" class="" />
                </Item>
                <Item>
                    <img width={500} src={Hive} alt="" class="" />
                </Item>
            </Carousel>
        </div>
    </section>
    </>
  )
}

export default Projects