import axios from 'axios'

const league_url = `https://backend-website.herokuapp.com/league`

export const getLamsey = () => axios.get(`${league_url}/get`)

export const updateLamsey = () => axios.get(`${league_url}/update`)

const post_url = `https://backend-website.herokuapp.com/post`

export const sendPost = (post) => { 
    axios.post(`${post_url}`, {creator: "test", message: "test", subject: "test", email: "test"})
}