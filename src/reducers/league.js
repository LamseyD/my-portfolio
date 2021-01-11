import { GET_LAMSEY, UPDATE_LAMSEY } from '../constants/actionTypes'
const reducer = (data = {}, action) => {
    switch (action.type){
        case GET_LAMSEY:
            return action.payload;
        case UPDATE_LAMSEY:
            return action.payload;
        default:
            return data
    }
}

export default reducer