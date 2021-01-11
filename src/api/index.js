import axios from 'axios'

const league_url = `http://localhost:3001/league`

export const getLamsey = () => axios.get(`${league_url}/get`)

export const updateLamsey = () => axios.get(`${league_url}/update`)