import axios from 'axios'

const league_url = `https://backend-website.herokuapp.com/league`

export const getLamsey = () => axios.get(`${league_url}/get`)

export const updateLamsey = () => axios.get(`${league_url}/update`)