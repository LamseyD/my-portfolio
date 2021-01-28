import * as api from '../api'
import { SEND_POST } from '../constants/actionTypes'

export const sendPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.sendPost(post)
        console.log(data)
        dispatch({type: SEND_POST, payload: data})
    } catch (error) {
        console.log(error)
    }
}