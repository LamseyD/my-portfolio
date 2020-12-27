import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import { Carousel } from 'react-bootstrap'

import Image1 from '../assets/IMG_4036.jpg'
import Image2 from '../assets/IMG_2294.jpg'
import Image3 from '../assets/IMG_3274.jpg'
import Image4 from '../assets/IMG_2019.jpg'

import ReactPlayer from 'react-player'

class AboutMeScreen extends Component {
    render() {
        return (
            <div>
                <div className="about-me">
                    <Grid>
                        <Cell col={12} style={{}}>

                            <div style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center', bottom:'70px', position: 'relative'}}>


                                <div style={{ paddingLeft: '100px', paddingRight: '50px', width: '50%' }}>
                                    <h1>
                                        About Me
                                    </h1>
                                    <p>
                                        Hi again. My name is Lam and I'm an aspiring fullstack developer and a computer engineering student based in Toronto, Ontario. I enjoy doing web and app development using Node.js frameworks, especially React. Since I love gaming, I also do some game development on the side just for fun, using Lua and LOVE2D game development framework.
                                    </p>

                                    <p>
                                        I'm also proficient in doing backend work with object oriented programming, either with Java or Python, and I have some experience with Natural Language Processing and Machine Learning with Scikit-Learn and NLTK
                                    </p>


                                </div>

                                <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
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


                            </div>
                            
                            <div className = "horizontal-divider">
                                <hr style = {{  border: '1px solid #1c1c1e', width: '50%', position: 'relative', left: '25%'}}></hr>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center', bottom:'70px', position: 'relative'}}>
                                <div className="about-me-text" style={{ width: '50%' }}>
                                    <div>
                                        <iframe width="720" height="405"
                                            src="https://www.youtube.com/embed/S-nSNONM_n0">
                                        </iframe>
                                    </div>
                                    <div>
                                        <i>
                                            Me taking off in a F/A-18C in DCS Flight Simulator
                                        </i>
                                    </div>
                                    
                                    <div style = {{marginTop: '30px'}}>
                                        <p>
                                            I have a very long list of hobbies since I am always open to learn new things, I do a little bit of photography once in awhile with my DSLR. However playing the guitar is always on the top of my list. I find it super relaxing and satisfying when I hear the music coming out of my guitar. I love watching sports, whether football or hockey, but I love baseball the most, go Jays! (and occasionally the Tampa Bay Rays.)
                                        </p>

                                        <p>
                                            I am also a huge nerd for flying things, the aerospace industry, rockets, satelites, planes or helicopters. Sometimes during my free time you can catch me flying around in a Sikorsky Blackhawk UH-60M or a McDonnell Douglas F/A-18C on flight sims.
                                        </p>
                                    </div>



                                </div>

                            </div>


                        </Cell>
                    </Grid>

                </div>

            </div>
        )
    }
}

export default AboutMeScreen