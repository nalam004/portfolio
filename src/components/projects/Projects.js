import React, { useState } from 'react'
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import Hive from '../../images/hive.png'
import lifelyhood from '../../images/lifelyhood.gif'
import uber from '../../images/uber.gif'
import wics from '../../images/wics.gif'
import star from '../../images/starsounds.png'
import SwipeableViews from 'react-swipeable-views';
import Item from './Item'

const useStyles = makeStyles(theme => ({
    indicator: {
      backgroundColor: "#90AC8E",
      height: "5px",
      top: "45px"
    },
    tabsMenue: {
      height: "10px",
      marginBottom: "40px",
      textAlign: "center",
      color: "#444440"
    }, 
    tabs: {
        fontSize: '16px'
    }
}));

function Projects() {  
    
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        console.log('new value', newValue)
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    
    return (
    <>
    <section id="projects">
        <div className="container">
            <div className="section-heading">
                <h1>Projects</h1>
            </div>

            <div className="tabs-wrapper">
                <Tabs value={value} fullwidth="true" centered onChange={handleChange}
                        className={classes.tabsMenue} 
                        TabIndicatorProps={{ className: classes.indicator }}
                >
                    <Tab className={classes.tabs} label="StarSounds" />
                    <Tab className={classes.tabs} label="UberX" />
                    <Tab className={classes.tabs} label="CCNY WiCs" />
                    <Tab className={classes.tabs} label="Lifelyhood" />
                    <Tab className={classes.tabs} label="The Hive" />
                </Tabs>

                <SwipeableViews index={value} onChangeIndex={handleChangeIndex} enableMouseEvents>
                    <Item 
                        image={star}
                        link='https://star-sounds.herokuapp.com/'
                        description="UI design of music player built with React, TypeScript, and Tailwind CSS."
                    ></Item>

                    <Item 
                        image={uber}
                        link='https://github.com/nalam004/Uber-Clone'
                        description="Uber Clone with Next JS, React JS, Tailwind CSS and Firebase."
                    ></Item>

                    <Item 
                        image={wics}
                        link='https://ccny-wics.herokuapp.com/'
                        description="React website for the CCNY Women in Computer Science club that 
                        features what we're about, upcoming events, and E-Board Members!"
                    ></Item>

                    <Item 
                        image={lifelyhood}
                        link='https://lifelyhood.herokuapp.com/'
                        description="React and Django web app that provides workspaces to keep three essential aspects of your life separate and organized."
                    ></Item>
                    
                    <Item 
                        image={Hive}
                        link='https://github.com/mgmayagu/The-Hive'
                        description="Python, tkinter, and MySQL system that facilitates active teaming of people with similar interest and skill-set to forge groups for a certain do-good project."
                    ></Item>

                </SwipeableViews> 
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects