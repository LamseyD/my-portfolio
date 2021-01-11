import React from 'react'

import useStyles from './styles.js'
import { useDispatch, useSelector } from 'react-redux'

import { CircularProgress } from '@material-ui/core'

import { updateLamsey } from '../../actions/league'

import { Button } from 'react-bootstrap'
const LeagueDiv = () => {
    const leagueData = useSelector ((state) => state.leagueReducer)
    // const FLEX_SR = leagueData[0]
    // const SOLO_Q = leagueData[1]
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div className = {classes.container}>
            {!leagueData.length ? <CircularProgress/> : (
                <div>
                    {console.log(leagueData)} 
                    <img src = {`http://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/${leagueData[0].profile.profileIconId}.png`} alt = {"profileIcon"} style = {{height: "10vh", width: "10vh"}} />
                </div>
            )
            }
            <Button onClick = {(event) => dispatch(updateLamsey())}>
                Update
            </Button>
        </div>)
}

export default LeagueDiv