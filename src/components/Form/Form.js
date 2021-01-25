import React, { useState } from 'react'


import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles'

import { useDispatch } from 'react-redux'



const Form = () => {
    const [formData, setFormData] = useState({
        creator: '',
        subject: '',
        message: '',
        email: '',
    })

    const classes = useStyles();

    const handleSubmit = (event) => {
        console.log("form submitted")
        event.preventDefault(); //prevent browser refresh
        clear();
        //if you want to trace dispatch 
        //here -> actions -> reducers.posts -> reducers.index -> "redux store" in src/index.js 
        //in addition, to connect with backend
        //here -> actions -> api -> backend
    }

    const clear = () => {
        setFormData({
        creator: '',
        subject: '',
        message: '',
        email: ''})
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6">
                        Leave Me a Message :)
                    </Typography>
                    <TextField
                        className = {classes.inputField}
                        name="creator"
                        variant="outlined"
                        label="Your Name"
                        fullWidth
                        value={formData.creator}
                        onChange={(event) => setFormData({ ...formData, creator: event.target.value })}
                    />
                    <TextField
                        className = {classes.inputField}
                        name="email"
                        variant="outlined"
                        label="Your Email"
                        fullWidth
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                    <TextField
                        className = {classes.inputField}
                        name="subject"
                        variant="outlined"
                        label="Subject"
                        fullWidth
                        value={formData.subject}
                        onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
                    />
                    <TextField
                        className = {classes.inputField}
                        name="message"
                        variant="outlined"
                        label="Message"
                        fullWidth
                        value={formData.message}
                        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    />

                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                        Submit
                    </Button>

                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                        Clear
                    </Button>
                </form >

            </Paper>
        </div>
    )
}

export default Form
