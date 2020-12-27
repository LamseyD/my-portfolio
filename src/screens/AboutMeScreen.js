import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import { Carousel } from 'react-bootstrap'

import Image1 from '../assets/IMG_4036.jpg'
import Image2 from '../assets/IMG_2294.jpg'
import Image3 from '../assets/IMG_3274.jpg'
import Image4 from '../assets/IMG_2019.jpg'

class AboutMeScreen extends Component {
    render() {
        return (
            <div>
                <div className="about-me">
                    <h1>
                        About Me
                    </h1>
                    <Grid>
                        <Cell col={12} style={{}}>
                            <div style={{ display: 'flex', flexDirection: 'row'}}>
                                <div style={{ padding: '100px', width: '50%', marginTop: '55px'}}>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                    </p>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                    </p>
                                </div>

                                <div style={{ width: '50%', display: 'flex', justifyContent: 'center', marginTop:'50px'}}>
                                    <Carousel indicators = {false} style = {{width:'70%'}}>
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


                        </Cell>
                    </Grid>

                </div>

            </div>
        )
    }
}

export default AboutMeScreen