import React, { useState } from 'react'
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import Hive from '../../images/hive.png'
import Vestigia from '../../images/vestigia.png'
import Photoshare from '../../images/photoshare.gif'
import lifelyhood from '../../images/lifelyhood.gif'
import SwipeableViews from 'react-swipeable-views';
import './Projects.css'
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
                <Tabs value={value} fullWidth centered onChange={handleChange}
                        className={classes.tabsMenue} 
                        TabIndicatorProps={{ className: classes.indicator }}
                >
                    <Tab label="Lifelyhood" />
                    <Tab label="Vestigia" />
                    <Tab label="The Hive" />
                    <Tab label="Photoshare" />
                </Tabs>

                <SwipeableViews index={value} onChangeIndex={handleChangeIndex} enableMouseEvents>
                    <Item 
                        image={lifelyhood}
                        link='https://lifelyhood.herokuapp.com/'
                        description="React and Django web app that provides workspaces to keep three essential aspects of your life separate and organized."
                    ></Item>

                    <Item 
                        image={Vestigia}
                        link='https://github.com/sqiu001/Vestigia'
                        description="Python, Flask, and MySQL web app that keeps track of a user’s job applications."
                    ></Item>
                    
                    <Item 
                        image={Hive}
                        link='https://github.com/mgmayagu/The-Hive'
                        description="Python, tkinter, and MySQL system that facilitates active teaming of people with similar interest and skill-set to forge groups for a certain do-good project."
                    ></Item>

                    <Item 
                        image={Photoshare}
                        link='https://github.com/nalam004?tab=repositories'
                        description="Django app with RESTful API that allows users sign in and post, edit, and delete images. Users can also add a comment on a post."
                    ></Item>

                </SwipeableViews> 
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects