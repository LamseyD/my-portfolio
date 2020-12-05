import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl'
import profilePicture from '../assets/circle-cropped.png'

import '../App.css'

class HomeScreen extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={profilePicture}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1> TITLE </h1>
                            <hr />
                            <p> SKILLS | SKILLS </p>
                            <div className="social-links">
                                {/* insert links here */}
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* insert links here */}
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>


                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default HomeScreen