import React, { Component } from 'react';

import { Grid, Cell, Typography, Divider } from '@material-ui/core'
import profilePicture from '../assets/circle-cropped.png'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import SchoolIcon from '@material-ui/icons/School';
import '../App.css'

class HomeScreen extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto', display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Grid xs = {12} sm = {6} container style = {{ marginTop: "150px", marginBottom: "200px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow : "5px 10px #888888", backgroundColor: "#1c1c1e",}}>
                    <Grid item xs = {12} sm = {6} style = {{backgroundColor: "#f2f2f7", paddingBottom: "3em"}}>
                        <img
                            src={profilePicture}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div style = {{padding: "3em"}}>
                            <Typography variant = "h3" style = {{color: "#1c1c1e"}}> Dinh Lam, Dang</Typography>
                            <Typography variant = "h6" style = {{color: "#1c1c1e"}}> Fullstack Developer and Computer Engineer</Typography>

                        </div>
                    </Grid>
                    <Grid item xs = {12} sm = {6} style = {{backgroundColor: "#1c1c1e", height: "100%", padding: "4em", textAlign: "left", color: "#f2f2f7" }}>
                        <div>
                            <Typography variant = "h3"  paragraph> Hi, I'm Lam </Typography>
                            <Typography variant = "body1"  paragraph > I'm an aspiring fullstack developer and a computer engineering student based in Toronto, ON. </Typography>
                            <Typography variant = "body1"  paragraph > React.js | React Native | Vue.js | Node.js | JavaScript | Python </Typography>
                            <p>
                                <Typography variant = "body1" >
                                    <SchoolIcon fontSize="small" style = {{marginRight: "1em"}}/>
                                    York University - Lassonde School of Engineering
                                </Typography>
                            </p>
                            <p>
                                <Typography variant = "body1" > 
                                    <EmailIcon fontSize="small" style = {{marginRight: "1em"}}/>
                                    lam.dangdinh98@gmail.com 
                                </Typography>
                            </p>
                            <p>
                                <Typography variant = "body1" >
                                    <PhoneIcon fontSize="small" style = {{marginRight: "1em"}}/>
                                    +1 (647) 787-4945 
                                </Typography>
                            </p>

                        </div>
                    </Grid>

                </Grid>

                {/* <Grid className="landing-grid" style = {{marginTop: '10vh'}}>
                    <Cell col={12}>
                        <img
                            src={profilePicture}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1> Hi. I'm Lam </h1>
                            <p> Fullstack Developer and Computer Engineer </p>
                            <hr />
                            <p> React.JS | React Native | Vue.JS | Node.JS </p>

                        </div>




                    </Cell>
                </Grid> */}

            </div>
        )
    }
}

export default HomeScreen