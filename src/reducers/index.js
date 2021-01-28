import { combineReducers } from 'redux'

import leagueReducer from './league'

import postReducer from './post'
//combine reducers here into states for redux store
export default combineReducers({
    leagueReducer, postReducer
})