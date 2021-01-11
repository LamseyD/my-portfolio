import * as api from '../api'
import { GET_LAMSEY, UPDATE_LAMSEY } from '../constants/actionTypes'


export const getLamsey = () => async (dispatch) => {
    try {
        const { data } = await api.getLamsey();
        dispatch({type: GET_LAMSEY, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateLamsey = () => async (dispatch) => {
    try {
        const { data } = await api.updateLamsey();
        console.log(data)
        dispatch({type: UPDATE_LAMSEY, payload: data})
    } catch (error) {
        console.log(error)
    }
}