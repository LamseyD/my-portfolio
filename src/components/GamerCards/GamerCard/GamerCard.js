import React from 'react'

import useStyles from './styles.js'
import { useDispatch, useSelector } from 'react-redux'

import { Card, CardActions, CardContent, CardMedia, Typography, CircularProgress } from '@material-ui/core'


import { updateLamsey } from '../../../actions/league'

import { Button } from 'react-bootstrap'

import leagueBg from '../../../assets/league-bg.jpg'

import placeHolder from '../../../assets/rankedIcons/default.png'

const GamerCard = ({data}) => {
    // const FLEX_SR = leagueData[0]
    // const SOLO_Q = leagueData[1]
    const classes = useStyles();
    const dispatch = useDispatch();

    let profileName = "Lamsey"
    let profileTag = "#NA1" || ""

    return (
        <div className = {classes.container}>
            {!data.length ? <CircularProgress/> : (
                <Card className = {classes.card}>
                    <CardMedia className = {classes.media} image = {leagueBg} alt = "league header"/>
                    
                    <img className = {classes.icon} src = {`http://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/${data[0].profile.profileIconId}.png`} alt = {"profileIcon"} />
                    <div className = {classes.profile}>
                        <Typography variant="h6"> {data[0].profile.name} </Typography>
                        &thinsp;
                        <Typography variant = "h6" style = {{color: 'grey'}}> {profileTag} </Typography>
                    </div>
                    <div className = {classes.gameMode}>
                        <div >
                            <img src = {placeHolder} height = "100px" width = "100px"/>
                            <Typography variant="body1"> Placeholder</Typography>
                            <Typography variant="body2"> Record </Typography>
                        </div>
                        <div className = {classes.divider}> </div>
                        <div>
                            <img src = {placeHolder} height = "100px" width = "100px"/>
                            <Typography variant="body1"> Placeholder</Typography>
                            <Typography variant="body2"> Record </Typography>
                        </div>
                    </div>
                    <div className = {classes.CardActions}>
                        <Button style = {{width: '134px', position: 'relative', bottom: '40px'}} onClick = {(event) => dispatch(updateLamsey())}>
                            Update
                        </Button>
                    </div>

                </Card>


            )
            }

        </div>)
}

export default GamerCard