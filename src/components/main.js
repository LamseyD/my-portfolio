import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AboutMeScreen from '../screens/AboutMeScreen';
import ContactScreen from '../screens/ContactScreen';
import FunScreen from '../screens/FunScreen';
import ProjectScreen from '../screens/ProjectScreen';
import ResumeScreen from '../screens/ResumeScreen';

import { Switch, Route } from 'react-router-dom'


const Main = () => (
    <Switch>
        <Route exact path="/" component = {HomeScreen}/>
        <Route path = "/about-me" component = {AboutMeScreen}/>
        <Route path = "/contact" component = {ContactScreen}/>
        <Route path = "/fun" component = {FunScreen}/>
        <Route path = "/projects" component = {ProjectScreen}/>
        <Route path = "/resume" component = {ResumeScreen}/>
    </Switch>
)

export default Main;