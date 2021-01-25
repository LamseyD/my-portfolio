import React, { useState } from 'react';
import { Tabs, Tab } from 'react-mdl'
import { Grid } from '@material-ui/core'
import useStyles from './styles'

import ProjectCard from '../components/ProjectCard/ProjectCard'
import memories from '../assets/memories.jpg'
import employees from '../assets/employee.jpg'
import stepFinder from '../assets/stepFinder.jpg'
import smartShoppers from '../assets/smartShoppers.jpg'
import oakTale from '../assets/oakTale.jpg'
const ProjectScreen = () => {

    const [activeTab, setActiveTab] = useState(0)

    const classes = useStyles()

    const toggleCategories = () => {
        if (activeTab === 0) {
            return (
                <div>
                    <Grid className = {classes.mainContainer} container alignItems="stretch">
                        <Grid className = {classes.cardItem} item xs = {12} lg = {3} sm = {6}>
                            <ProjectCard title="iMemories" description="A simple image sharing web application written with JavaScript and React.js with authentication and a database" selectedFile = {memories} tools = "React.js, MongoDB, Express, Node.js" github = "https://github.com/LamseyD/memories-mern"/>
                        </Grid>
                        <Grid className = {classes.cardItem} item xs = {12} lg = {3} sm = {6}>
                            <ProjectCard title="myEmployees" description="A employee management system written with JavaScript and React.js " selectedFile = {employees} tools = "React.js, MySQL, Express, Node.js" github = "https://github.com/LamseyD/simple-crud"/>
                        </Grid>
                        <Grid className = {classes.cardItem} item xs = {12} lg = {3} sm = {6}>
                            <ProjectCard title="stepFinder" description="A exercise helper app to help users achieve their walking step goal written with JavaScript and React Native" tools = "React Native, TypeScript, JavaScript" selectedFile = {stepFinder} github = "https://github.com/LamseyD/step-finder"/>
                        </Grid>
                        <Grid className = {classes.cardItem} item xs = {12} lg = {3} sm = {6}>
                            <ProjectCard title="Other smaller React Native Apps" description = "A collection of other smaller React Native app written with JavaScript" tools = "React Native, JavaScript" github = "https://github.com/LamseyD/React-Native-Mini-Apps"/>
                        </Grid>
                    </Grid>
                </div>

            )
        } else if (activeTab === 1) {
            return (
                <div>
                    <Grid className = {classes.mainContainer} container alignItems="stretch">
                        <Grid className = {classes.cardItem} item xs = {12} sm = {3}>
                            <ProjectCard title="smartShoppers" description = "A shopping system management written with JavaScript and Vue.js - Frontend Developer - School Project" selectedFile = {smartShoppers} tools = "Vue.Js, JavaScript" youtube = "https://www.youtube.com/watch?v=ryAGjLRN-Yc&feature=youtu.be"/>
                        </Grid>
                    </Grid>
                </div>
            )
        } else if (activeTab === 2) {
            return (
                <div>
                    <Grid className = {classes.mainContainer} container alignItems="stretch">
                        <Grid className = {classes.cardItem} item xs = {12} sm = {6} lg = {3}>
                            <ProjectCard title="OakTale" description = "A 2D RPG game inspired by Maplestory and Super Mario Bros, written with Lua and Love2D Game development framework" selectedFile = {oakTale} tools = "Lua, Love2D" github = "https://github.com/LamseyD/OakTale" youtube = "https://www.youtube.com/watch?v=sFbyKUHN3ok"/>
                        </Grid>
                        <Grid className = {classes.cardItem} item xs = {12} sm = {6} lg = {3}>
                            <ProjectCard title="Other smaller games" description = "A collection of other smaller 2D games written with Lua and Love2D Game development" tools = "Lua, Love2D" github = "https://github.com/LamseyD/Game-dev-examples"/>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }


    return (
        <div>
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                <Tab> React </Tab>
                <Tab> Vue </Tab>
                <Tab> Game Development </Tab>
            </Tabs>

            {toggleCategories()}
            {/* <Grid className = {classes.mainContainer} container alignItems="stretch">

                        // {toggleCategories()}

            </Grid> */}
        </div>
    )
}

export default ProjectScreen