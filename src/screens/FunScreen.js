import React, { useEffect } from 'react';

import LeagueDiv from '../components/LeagueData/LeagueDiv.js'

import GamerCards from '../components/GamerCards/GamerCards'
import { getLamsey } from '../actions/league'
import { useDispatch } from 'react-redux';

function FunScreen (){

    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getLamsey());
    }, [dispatch])

    return(

        <div style = {{display:"flex", justifyContent: "center", paddingTop: "80px", paddingBottom: "150px"}}> 
            <GamerCards/>


        </div>
    )
}

export default FunScreen