import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl'
import profilePicture from '../assets/circle-cropped.png'

import '../App.css'

class HomeScreen extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid" style = {{marginTop: '100px'}}>
                    <Cell col={12}>
                        <img
                            src={profilePicture}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text" >
                            <h1> Hi. I'm Lam </h1>
                            <p> Fullstack Developer and Computer Engineer </p>
                            <hr />
                            <p> React.JS | React Native | Vue.JS | Node.JS </p>

                        </div>




                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default HomeScreen