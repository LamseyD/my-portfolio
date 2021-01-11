import React from 'react'
import { useSelector } from 'react-redux'

import { Grid, CircularProgress } from '@material-ui/core'
import GamerCard from './GamerCard/GamerCard'

import useStyles from './styles'

const Posts = ({setCurrentId}) => {
    const leagueData = useSelector ((state) => state.leagueReducer)
    
    const classes = useStyles()
    return (
        <div>
            <Grid className = {classes.container} container alignItems="stretch">
                {   //on xsmall/mobile device it takes 12 cells
                    // on small/larger it takes 6
                    // posts.map((post) => (
                        <Grid item xs={12} sm = {6}> 
                            <GamerCard data = {leagueData}/>
                        </Grid>
                    // ))
                }
            </Grid>
        </div>
    )
}

export default Posts