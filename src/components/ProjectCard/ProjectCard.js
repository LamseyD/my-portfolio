import React from 'react'
import useStyles from './styles'
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';


const ProjectCard = ({selectedFile, title, description, tools, github, youtube}) => {
    const classes = useStyles()

    return (
        <div>
            <Card className = {classes.card}>
                <CardMedia className = {classes.media} image = {selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}/>
                <div className = {classes.overlay2}>
                    {github ? (                    
                        <Button style = {{color:'white'}} size = "small" onClick = {() => {}}>
                            <a href={github} rel="noopener noreferrer" target="_blank">
                                <GitHubIcon fontSize = "default" style = {{color:'white'}}/>
                            </a>
                        </Button>) : null }
                    
                    {youtube ? (
                        <Button style = {{color:'white'}} size = "small" onClick = {() => {}}>
                            <a href={youtube} rel="noopener noreferrer" target="_blank">
                                <YouTubeIcon fontSize = "default" style = {{color:'white'}}/>
                            </a>
                        </Button>
                    ) : null }

                </div>
                <Typography className = {classes.title} variant = "h4" gutterBottom> {title} </Typography>
                <CardContent>
                    {/* gutterBottom to add paddings */}
                    <Typography className = {classes.message} variant = "body1" color="textSecondary" component = "p" gutterBottom> {description} </Typography>
                </CardContent>

                <CardContent >
                    <Typography variant = "body2" color="textSecondary" component = "p" gutterBottom> Tools used: {tools} </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard
