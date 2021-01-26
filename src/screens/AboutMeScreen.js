import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl'
import { Carousel } from 'react-bootstrap'


import Image1 from '../assets/IMG_4036.jpg'
import Image2 from '../assets/IMG_2294.jpg'
import Image3 from '../assets/IMG_3274.jpg'
import Image4 from '../assets/IMG_2019.jpg'
import greyBG from '../assets/grey-bg.jpg'

import { Typography, Grid } from '@material-ui/core'

import ReactPlayer from 'react-player/youtube'

import useStyles from './styles'
const AboutMeScreen = () => {

        const classes = useStyles()
        
        return (
            <div>
                <div className="about-me" style = {{}}>
                    <div style = {{height: '90vh', paddingBottom: "100px"}}>
                        <Grid className = {classes.topPadding} container xs = {12} style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Grid item xs = {12} sm = {6} style = {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                                <Typography variant = "h2" paragraph> About Me </Typography>
                                <Grid item sm = {6} xs = {9}>
                                    <div style = {{textAlign: "justify"}}> 
                                        <Typography variant = "body1" paragraph> I enjoy doing web and app development using Node.js frameworks, especially React. I am always passionate about learning more about React and web development. Currently I am trying to learn TypeScript, GraphQL and Next.js; I believe TypeScript and Next.js will be very helpful tools for a React developer in the future and they will be some of my assets as a Fullstack developer </Typography>
                                        <Typography variant = "body1" paragraph> Since I love gaming, I also do some game development on the side just for fun, using Lua and LOVE2D game development framework. I'm also proficient in doing backend work with object oriented programming, either with Java or Python, and I have some experience with Natural Language Processing and Machine Learning with Scikit-Learn and NLTK </Typography>

                                    </div>
                                </Grid>

                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', paddingBottom: "3em" }}>
                                            <Carousel indicators={false} style={{ width: '70%' }}>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100 carousel-img"
                                                        src={Image1}
                                                        alt="First slide"
                                                    />
                                                    <Carousel.Caption>
                                                        <div className="my-carousel-caption">
                                                            <p>This is me!</p>

                                                        </div>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100 carousel-img"
                                                        src={Image2}
                                                        alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                        <div className="my-carousel-caption">
                                                            <p>With friends at Dundas Peak!</p>

                                                        </div>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100 carousel-img"
                                                        src={Image3}
                                                        alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                        <div className="my-carousel-caption">
                                                            <p>Toronto Blue Jays Winter Fest 2019</p>

                                                        </div>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100 carousel-img"
                                                        src={Image4}
                                                        alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                        <div className="my-carousel-caption">
                                                            <p>Kite festival in Brampton</p>

                                                        </div>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>

                                        </div>
                                </Grid>
                        </Grid>
                    </div> 
                    
                    <div style = {{height: '90vh', paddingBottom: "200px", paddingTop: "100px" }}> 
                            <div>
                                <Grid className = {classes.secondParagraph} xs = {12} container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection :"column"}}>
                                    {/* <Grid item xs = {9} sm = {12}>
                                        <div className = "video-container">
                                            <iframe className = "responsive-iframe" title="Flying around at the speed of sound"
                                                src="https://www.youtube.com/embed/S-nSNONM_n0">
                                            </iframe>
                                        </div>
                                        {/* <div className = {classes.videoPlayer}>
                                            {
                                                (window.screen.width <= 667) ? (<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width = "100%" height = "100%"/>) : <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                            }
                                        </div> */}
                                    {/* <Grid item xs = {9} sm = {12}> */}
                                    <div className = {classes.videoPlayer}>    
                                        <div className = "video-container">
                                            <iframe className = "responsive-iframe" title="Flying around at the speed of sound"
                                                src="https://www.youtube.com/embed/S-nSNONM_n0">
                                            </iframe>
                                        </div>
                                        <div>
                                            <i>
                                                Me taking off in a F/A-18C in DCS Flight Simulator
                                            </i>
                                        </div>
                                    </div>
                                    {/* </Grid> */}

                                    <Grid item xs = {9} sm = {6} style={{ marginTop: '3em', paddingBottom: '5em', textAlign: "justify"}}>

                                    
                                        <Typography variant = "body1" paragraph>
                                            I have a very long list of hobbies since I am always open to learn new things, I do a little bit of photography once in awhile with my DSLR. However playing the guitar is always on the top of my list. I find it super relaxing and satisfying when I hear the music coming out of my guitar. I love watching sports, whether football or hockey, but I love baseball the most, go Jays! 
                                        </Typography>

                                        <Typography variant = "body1" paragraph>
                                            I am also a huge nerd for flying things, the aerospace industry, rockets, satelites, planes or helicopters. Sometimes during my free time you can catch me flying around in a Sikorsky Blackhawk UH-60M or a McDonnell Douglas F/A-18C on flight sims.
                                        </Typography>

                                    </Grid>

                                </Grid>

                            </div>
                    </div>

                </div>



            </div>
        )

}

export default AboutMeScreen