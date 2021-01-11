import { combineReducers } from 'redux'

import leagueReducer from './league'
//combine reducers here into states for redux store
export default combineReducers({
    leagueReducer,
})