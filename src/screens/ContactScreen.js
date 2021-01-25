import React, { Component } from 'react';

import { Typography, Grid } from '@material-ui/core'
import Form from '../components/Form/Form';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

class ContactScreen extends Component {
    render() {
        return (
            <div style = {{display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "200px", flexDirection: "column"}}>
                <div style = {{padding: "3em" }}>
                    <Typography variant = "h3" color = "#1c1c1e"> Get In Touch </Typography>

                </div>

                <Grid xs = {12} sm = {6} container style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f2f2f7", padding: "2em"}}>
                    <Grid xs = {12} sm = {6} item>
                        <Form/>
                    </Grid>
                    <Grid xs = {12} sm = {6} item style = {{marginTop: "1em"}}>
                        <p>
                            <Typography variant = "body1" color = "#1c1c1e"> 
                                <EmailIcon fontSize="large" style = {{marginRight: "1em"}}/>
                                lam.dangdinh98@gmail.com 
                            </Typography>
                        </p>
                        <p>
                            <Typography variant = "body1" color = "#1c1c1e">
                                <PhoneIcon fontSize="large" style = {{marginRight: "1em"}}/>
                                +1 (647) 787-4945 
                            </Typography>
                        </p>

                        <p>
                            <Typography variant = "body1" color = "#1c1c1e"> 
                                Feel free to check out my affiliated links below!
                            </Typography>
                        </p>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ContactScreen