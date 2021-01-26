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

        <div style = {{display:"flex", justifyContent: "center", alignItems: "center", paddingTop: "80px", paddingBottom: "150px", flexDirection: "column"}}> 
            <div>
                Work In Progress

                Inserting my League of Legends data request here. In addition to my chess profile :)

            </div>
            <div>
                <GamerCards/>

            </div>


        </div>
    )
}

export default FunScreen